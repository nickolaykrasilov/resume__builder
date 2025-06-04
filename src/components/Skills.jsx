import React, { useState } from 'react';

export default function Skills({ data, onChange }) {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      onChange('skills', [...data, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    onChange('skills', data.filter((_, i) => i !== index));
  };

  return (
    <div className="form-section">
      <h2>Навыки</h2>
      <div>
        <input
          placeholder="Новый навык"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
        />
        <button onClick={handleAddSkill}>Добавить</button>
      </div>
      <ul>
        {data.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => handleRemoveSkill(index)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}