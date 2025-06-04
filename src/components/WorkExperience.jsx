import React from 'react';

export default function WorkExperience({ data, onChange }) {
  const handleChange = (index, field, value) => {
    const updatedJobs = [...data];
    updatedJobs[index][field] = value;
    onChange('workExperience', updatedJobs);
  };

  const addNewJob = () => {
    onChange('workExperience', [
      ...data,
      { company: '', position: '', period: '', description: '' }
    ]);
  };

  return (
    <div className="form-section">
      <h2>Опыт работы</h2>
      {data.map((job, index) => (
        <div key={index}>
          <input
            placeholder="Компания"
            value={job.company}
            onChange={(e) => handleChange(index, 'company', e.target.value)}
          />
          <input
            placeholder="Должность"
            value={job.position}
            onChange={(e) => handleChange(index, 'position', e.target.value)}
          />
          <input
            placeholder="Период (2020-2022)"
            value={job.period}
            onChange={(e) => handleChange(index, 'period', e.target.value)}
          />
          <textarea
            placeholder="Описание"
            value={job.description}
            onChange={(e) => handleChange(index, 'description', e.target.value)}
          />
        </div>
      ))}
      <button onClick={addNewJob}>+ Добавить место работы</button>
    </div>
  );
}