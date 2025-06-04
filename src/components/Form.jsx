import { useState } from 'react';

export default function Form({ data, onChange }) {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim()) {
      onChange('skills', [...data.skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  return (
    <div className="card" style={{ animation: 'pulse 1s ease-in-out' }}>
      <div className="form-section">
        <h3 className="form-title">Личная информация</h3>
        <label>Полное имя</label>
        <input
          value={data.name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="Иван Иванов"
        />

        <label>Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
          placeholder="ivan@example.com"
        />

        <label>Телефон</label>
        <input
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          placeholder="+7 (999) 123-45-67"
        />
      </div>

      <div className="form-section">
        <h3 className="form-title">Навыки</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Добавить навык"
            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
          />
          <button 
            className="btn" 
            onClick={addSkill}
            style={{ animation: 'pulse 2s infinite' }}
          >
            Добавить
          </button>
        </div>
        <div className="skills-list">
          {data.skills.map((skill, index) => (
            <span 
              key={index} 
              className="skill-tag"
              style={{ animation: `fadeIn 0.${index/2}s ease-out` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}