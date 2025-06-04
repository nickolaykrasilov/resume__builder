import React, { useState, useEffect } from 'react';
import vacanciesData from '../data/vacancies.json';
import '../styles/Vacancies.css';

export default function VacanciesTracker() {
  const [vacancies, setVacancies] = useState([]);
  const [filters, setFilters] = useState({
    status: '',
    company: ''
  });

  useEffect(() => {
    setVacancies(vacanciesData);
  }, []);

  const filteredVacancies = vacancies.filter(vacancy => {
    return (
      (filters.status === '' || vacancy.status === filters.status) &&
      (filters.company === '' || vacancy.company.includes(filters.company))
    );
  });

  const updateStatus = (index, newStatus) => {
    const updated = [...vacancies];
    updated[index].status = newStatus;
    updated[index].lastUpdate = new Date().toLocaleDateString();
    setVacancies(updated);
  };

  return (
    <div className="vacancies-tracker">
      <h2>Отслеживание вакансий</h2>
      
      <div className="filters">
        <select 
          value={filters.status}
          onChange={(e) => setFilters({...filters, status: e.target.value})}
        >
          <option value="">Все статусы</option>
          <option value="Отправлено резюме">Отправлено резюме</option>
          <option value="Собеседование">Собеседование</option>
          <option value="Отказ">Отказ</option>
        </select>
        
        <input
          type="text"
          placeholder="Фильтр по компании"
          value={filters.company}
          onChange={(e) => setFilters({...filters, company: e.target.value})}
        />
      </div>
      
      <div className="vacancies-list">
        {filteredVacancies.map((vacancy, index) => (
          <div key={index} className="vacancy-card">
            <div className="vacancy-header">
              <h3>{vacancy.company}</h3>
              <span className="last-update">{vacancy.lastUpdate}</span>
            </div>
            
            <a 
              href={vacancy.vacancyLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="vacancy-link"
            >
              Посмотреть вакансию
            </a>
            
            <div className="vacancy-status">
              <select
                value={vacancy.status}
                onChange={(e) => updateStatus(index, e.target.value)}
              >
                <option value="">Не указан</option>
                <option value="Отправлено резюме">Отправлено резюме</option>
                <option value="Собеседование">Собеседование</option>
                <option value="Отказ">Отказ</option>
              </select>
            </div>
            
            {vacancy.missingKnowledge.length > 0 && (
              <div className="missing-skills">
                <h4>Не хватает знаний:</h4>
                <ul>
                  {vacancy.missingKnowledge.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}