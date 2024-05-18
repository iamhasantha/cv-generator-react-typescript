import React, { createContext, useState, ReactNode } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string;
}

interface FormContextProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  education: '',
  experience: '',
  skills: '',
};

export const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
