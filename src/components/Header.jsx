import React from 'react';
import '../styles/Header.css';

export default function Header({ onExportPDF }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-titles">
          <h1 className="header-title">
            <span className="header-icon">✨</span>
            Конструктор резюме
          </h1>
          <p className="header-subtitle">Создайте профессиональное резюме за минуты</p>
        </div>
        <button 
          className="export-pdf-btn"
          onClick={onExportPDF}
        >
          Экспорт в PDF
        </button>
      </div>
    </header>
  );
}