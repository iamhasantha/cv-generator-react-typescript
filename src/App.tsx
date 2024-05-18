// Hasantha Kariyawasam

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import FormPage from './pages/FormPage';
import PreviewPage from './pages/PreviewPage';
import GlobalStyle from './styles/GlobalStyle';


const App: React.FC = () => {
  return (
    <FormProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" Component={FormPage} />
          <Route path="/preview" Component={PreviewPage} />
        </Routes>
      </Router>
    </FormProvider>
  );
};

export default App;
