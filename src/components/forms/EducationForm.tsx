import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';


const EducationForm: React.FC = () => {
  const { formData, setFormData } = useContext(FormContext)!;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Education</h2>
      <textarea
        name="education"
        value={formData.education}
        onChange={handleChange}
        placeholder="Education"
      />
    </div>
  );
};

export default EducationForm;
