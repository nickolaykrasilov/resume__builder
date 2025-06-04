import React from 'react';

export default function Education({ data, onChange }) {
  const handleChange = (index, field, value) => {
    const updatedEducation = [...data];
    updatedEducation[index][field] = value;
    onChange('education', updatedEducation);
  };

  const addNewEducation = () => {
    onChange('education', [
      ...data,
      { university: '', degree: '', period: '' }
    ]);
  };

  return (
    <div className="form-section">
      <h2>Образование</h2>
      {data.map((item, index) => (
        <div key={index}>
          <input
            placeholder="Университет"
            value={item.university}
            onChange={(e) => handleChange(index, 'university', e.target.value)}
          />
          <input
            placeholder="Степень"
            value={item.degree}
            onChange={(e) => handleChange(index, 'degree', e.target.value)}
          />
          <input
            placeholder="Период (2015-2019)"
            value={item.period}
            onChange={(e) => handleChange(index, 'period', e.target.value)}
          />
        </div>
      ))}
      <button onClick={addNewEducation}>+ Добавить образование</button>
    </div>
  );
}