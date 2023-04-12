import React from 'react';
import image1 from '../../images/image1.jpg'



export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        My name is Jennilee Messenger. I am a full time Maximo Administrator for a major utility company. Over the last 16 years
        I have worked in operations and work management accross the country. This global perspective has allowed me to be a more well rounded contributor and has helped shaped who I am today.
        This past year I had decided to challenge myself to learn something new and tie my operations and development work together by learn how to develop front end and back end applications.
        <br></br>
        <br></br>

        A few things I am proficient in are listed below.
        <ol>
          <li> Innovation </li>
          <li> Change Management</li>
          <li> Process Improvements </li>
          <li> Dev Ops </li>
          <li> Project Management</li>
          <li> Developing my Coding skills! </li>
        </ol>
      </p>
      <div>
        <img src={image1} width={380} height={475} class="rounded mx-auto d-block p-10px" alt="Jenny's Photo" />




      </div>
    </div>
  );
}
