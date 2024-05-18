import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import CVPreview from '../components/CVPreview';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import styled from 'styled-components';

const PreviewPage: React.FC = () => {
  const { formData } = useContext(FormContext)!;
  const history = useNavigate();

  const downloadPDF = () => {
    const input = document.getElementById('cv-preview');
    if (input) {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgHeight / imgWidth;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfWidth * ratio);
        pdf.save('cv.pdf');
      });
    }
  };

  const handleEdit = () => {
    history('/');
  };

  return (
    <Container>
      <h1>CV Preview</h1>
      <CVPreviewContainer id="cv-preview">
        <CVPreview formData={formData} />
      </CVPreviewContainer>
      <ButtonContainer>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={downloadPDF}>Download PDF</button>
      </ButtonContainer>
    </Container>
  );
};

export default PreviewPage;

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const CVPreviewContainer = styled.div`
  width: 210mm; /* A4 size */
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  background: #fff;
  color: black;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
`;
