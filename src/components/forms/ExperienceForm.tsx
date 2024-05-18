import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

const ExperienceForm: React.FC = () => {
  const { formData, setFormData } = useContext(FormContext)!;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Experience</h2>
      <textarea
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="Experience"
      />
    </div>
  );
};

export default ExperienceForm;
