import React from 'react';
import PersonalInfo from './PersonalInfo';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skills from './Skills';
import '../styles/Form.css';

export default function FormSection({ data, onChange }) {
  return (
    <div className="form-container">
      <PersonalInfo data={data.personalInfo} onChange={onChange} />
      <WorkExperience data={data.workExperience} onChange={onChange} />
      <Education data={data.education} onChange={onChange} />
      <Skills data={data.skills} onChange={onChange} />
    </div>
  );
}