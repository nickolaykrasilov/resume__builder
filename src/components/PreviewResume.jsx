export default function Preview({ data }) {
  return (
    <div className="card resume-preview">
      <div className="resume-header">
        <h2 className="resume-name" style={{ animation: 'fadeIn 0.6s ease-out' }}>
          {data.name || 'Иван Иванов'}
        </h2>
        <div className="resume-contact">
          <p>{data.email || 'example@email.com'}</p>
          <p>{data.phone || '+7 (123) 456-78-90'}</p>
        </div>
      </div>

      <div className="resume-section" style={{ animation: 'fadeIn 0.7s ease-out' }}>
        <h3 className="section-title">Навыки</h3>
        <div className="skills-list">
          {data.skills.map((skill, index) => (
            <span 
              key={index} 
              className="skill-tag"
              style={{ animation: `fadeIn 0.${5 + index}s ease-out` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="resume-section" style={{ animation: 'fadeIn 0.8s ease-out' }}>
        <h3 className="section-title">Опыт работы</h3>
        {data.experience.map((exp, index) => (
          <div 
            key={index} 
            className="experience-item"
            style={{ animation: `fadeIn 0.${8 + index/2}s ease-out` }}
          >
            <div className="experience-title">
              <span>{exp.position}</span>
              <span className="experience-date">{exp.period}</span>
            </div>
            <p>{exp.company}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="resume-section" style={{ animation: 'fadeIn 0.9s ease-out' }}>
        <h3 className="section-title">Образование</h3>
        {data.education.map((edu, index) => (
          <div key={index} style={{ animation: `fadeIn 0.${9 + index/2}s ease-out` }}>
            <p><strong>{edu.university}</strong></p>
            <p>{edu.degree}, {edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}