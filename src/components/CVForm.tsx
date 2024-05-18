import React, { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string;
}

interface CVFormProps {
  onSubmit: (data: FormData) => void;
}

const CVForm: React.FC<CVFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData: FormData = {
            name,
            email,
            phone,
            education,
            experience,
            skills,
        };
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
            <textarea value={education} onChange={(e) => setEducation(e.target.value)} placeholder="Education"></textarea>
            <textarea value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Experience"></textarea>
            <textarea value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Skills"></textarea>
            <button type="submit">Generate CV</button>
        </form>
    );
};

export default CVForm;
