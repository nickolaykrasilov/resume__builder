import { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Header from './components/Header';
import Form from './components/Form';
import Preview from './components/Preview';
import VacanciesTracker from './components/VacanciesTracker';
import './styles/App.css';

export default function App() {
  const [resume, setResume] = useState({
    name: '',
    email: '',
    phone: '',
    skills: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    experience: [
      { 
        company: 'Tech Solutions Inc', 
        position: 'Frontend Developer', 
        period: '2020-2023',
        description: 'Разработка пользовательских интерфейсов' 
      }
    ],
    education: [
      {
        university: 'State University',
        degree: 'Computer Science',
        year: '2019'
      }
    ]
  });

  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('resume');
  const printRef = useRef();

  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleChange = (field, value) => {
    setResume(prev => ({ ...prev, [field]: value }));
  };

  const handleExportPDF = useReactToPrint({
    content: () => printRef.current,
    pageStyle: `
      @page { 
        size: A4; 
        margin: 10mm; 
      }
      @media print {
        body { 
          -webkit-print-color-adjust: exact; 
          background: white !important;
        }
        .resume-preview {
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
        }
      }
    `,
    documentTitle: `${resume.name || 'Резюме'}_${new Date().toLocaleDateString()}`,
    onBeforeGetContent: () => {
      console.log('Начало генерации PDF');
      return Promise.resolve();
    },
    onPrintError: (error) => {
      console.error('Ошибка печати:', error);
    }
    
  });

  return (
    <div className="app">
      <Header onExportPDF={handleExportPDF} />
      
      <div className="theme-switcher">
        <label className="switch">
          <input 
            type="checkbox" 
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'resume' ? 'active' : ''}`}
          onClick={() => setActiveTab('resume')}
        >
          Резюме
        </button>
        <button 
          className={`tab ${activeTab === 'vacancies' ? 'active' : ''}`}
          onClick={() => setActiveTab('vacancies')}
        >
          Вакансии
        </button>
      </div>
      
      <main>
        {activeTab === 'resume' ? (
          <div className="resume-container">
            <Form data={resume} onChange={handleChange} />
            <Preview data={resume} ref={printRef} />
          </div>
        ) : (
          <VacanciesTracker />
        )}
      </main>
    </div>
  );
}