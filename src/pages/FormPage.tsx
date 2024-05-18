import React, { useState } from 'react';
import PersonalInfoForm from '../components/forms/PersonalForm';
import EducationForm from '../components/forms/EducationForm';
import ExperienceForm from '../components/forms/ExperienceForm';
import SkillsForm from '../components/forms/SkillsForm';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const FormPage: React.FC = () => {
  const [step, setStep] = useState(0);
  const history = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    history('/preview');
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <PersonalInfoForm />;
      case 1:
        return <EducationForm />;
      case 2:
        return <ExperienceForm />;
      case 3:
        return <SkillsForm />;
      default:
        return <PersonalInfoForm />;
    }
  };

  return (
    <Container>
      <h1>CV Generator</h1>
      {renderStep()}
      <ButtonContainer>
        {step > 0 && <button onClick={prevStep}>Back</button>}
        {step < 3 ? <button onClick={nextStep}>Next</button> : <button onClick={handleSubmit}>Submit</button>}
      </ButtonContainer>
    </Container>
  );
};

export default FormPage;

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  button {
    padding: 10px 20px;
    font-size: 16px;
  }
`;
