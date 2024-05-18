import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

const SkillsForm: React.FC = () => {
  const { formData, setFormData } = useContext(FormContext)!;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Skills</h2>
      <textarea
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        placeholder="Skills"
      />
    </div>
  );
};

export default SkillsForm;
