import React, { forwardRef } from 'react';
import '../styles/Preview.css';

const Preview = forwardRef(({ data }, ref) => {
  return (
    <div className="resume-preview" ref={ref}>
      <div className="resume-header">
        <h1 className="resume-name">{data.name || 'Иван Иванов'}</h1>
        <div className="resume-contact">
          <p>{data.email || 'example@email.com'}</p>
          <p>{data.phone || '+7 (123) 456-78-90'}</p>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Навыки</h2>
        <div className="skills-list">
          {data.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Опыт работы</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-title">
              <span>{exp.position}</span>
              <span className="experience-date">{exp.period}</span>
            </div>
            <p className="company-name">{exp.company}</p>
            {exp.description && <p className="job-description">{exp.description}</p>}
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h2 className="section-title">Образование</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="education-item">
            <p className="university"><strong>{edu.university}</strong></p>
            <p>{edu.degree}, {edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

Preview.displayName = 'Preview'; 

export default Preview;