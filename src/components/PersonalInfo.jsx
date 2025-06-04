import React from 'react';

export default function PersonalInfo({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange('personalInfo', field, value);
  };

  return (
    <div className="form-section">
      <h2>Личная информация</h2>
      <input
        placeholder="Имя"
        value={data.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <input
        placeholder="Email"
        value={data.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <input
        placeholder="Телефон"
        value={data.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
      />
      <input
        placeholder="LinkedIn"
        value={data.linkedin}
        onChange={(e) => handleChange('linkedin', e.target.value)}
      />
    </div>
  );
}