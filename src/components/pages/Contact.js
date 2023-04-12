import React from 'react';


export default function Contact() {
  return (
    <div className='ContactMe contentWrapper'>
      <h2>Contact Me</h2>
      <p> Please enter your information below. Jenny will reach out to you withing 24 hours !</p>
      <div> 
<>
<div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon1">
      Name:
    </span>
    <input
      type="text"
      className="form-control"
      placeholder="Enter your name"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </div>
  <div className="input-group has-validation mb-3">
    <span className="input-group-text" id="basic-addon1">
      Email:
    </span>
    <input
      type="text"
      className="form-control"
      placeholder="Example@example.com"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </div>
  <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon1">
      Phone #: 
    </span>
    
    <input
      type="text"
      className="form-control"
      placeholder="445-980-7878"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </div>

  <select className="form-select" aria-label="Default select example">
  <option selected="">What stage is your project?</option>
  <option value={1}>Scoping/Design</option>
  <option value={2}>Requirements</option>
  <option value={3}>Building</option>
  <option value={3}>Deployment</option>
  <option value={3}>Already Deployed/Maintenance</option>
</select>
  


  <div className="input-group">
    <span className="input-group-text">Please describe your project scope.</span>
    <textarea
      className="form-control"
      aria-label="Comments or Questions"
      defaultValue={""}
    />
  </div>
</>

<button type="button" className="btn btn-primary">
  Submit
</button>



      </div>
    </div>



  );
}
