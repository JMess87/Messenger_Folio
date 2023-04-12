import React from 'react';
import JMessRes from '../../components/Resumes/JMessRes.docx';
import JMessPDF from '../../components/Resumes/JMessPDF.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
      <a href={require("../../components/Resumes/JMessPDF.pdf")} download>Jennilee Messenger Resume (PDF)</a>
      <br></br>
      <a href={require("../../components/Resumes/JMessRes.docx")} download>Jennilee Messenger Resume (.doc))</a>

      
      </p>
    </div>
  )
}
