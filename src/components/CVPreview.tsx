import React from 'react';

interface CVPreviewProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
  };
}

const CVPreview: React.FC<CVPreviewProps> = ({ formData }) => {
  return (
    <div id="cv-preview">
      <h1>{formData.name}</h1>
      <p>{formData.email}</p>
      <p>{formData.phone}</p>
      <h2>Education</h2>
      <p>{formData.education}</p>
      <h2>Experience</h2>
      <p>{formData.experience}</p>
      <h2>Skills</h2>
      <p>{formData.skills}</p>
    </div>
  );
};

export default CVPreview;
