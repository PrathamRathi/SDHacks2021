import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import '../components/manage_projects.css';
import { Link } from 'react-router-dom';
import Project from '../components/Project.js'

function manageProjects(){
    return(
      <>
      <div>
      <Project name={'Equal Means Equal'} description={'In our effort to work to ratify the Equal Rights Amendment, we need developers who can help us make a mobile app and improve our website, so that we can reach and connect with more supporters. We also need to declare as a 501(c) so we are looking for accountants who have experience with that.'} 
        src={'https://drive.google.com/uc?export=view&id=13orbF5EZDwkZVeJXH21tI_qym9VU-PEC'}
        label = "Gender Equality"
        seeking = "Software Engineers, Accountants, and Public Relations"
      />
      <div class="manage-project-page">
        <h1> Starting: 2/20/2021</h1>
        <h1> Applications</h1>
        <h3> Software Engineers</h3>
        <h5> Applicant 1: Meghaj Vadlaputi </h5>
        <h5> Email: emailmeghaj@gmail.com</h5>
        <h5> I am an experienced web developer with a specialization in styling and UI/UX design.</h5>
        <h5> I am extremely passionate about closing the wage gap and I know I can help contribute to this movement.</h5>
        <div>
            <Link to='/user' className='accept-btn'>Accept</Link>
        </div>
        <div>
            <Link to='/user' className='reject-btn'>Reject</Link>
        </div>
        <h3> Accountants </h3>
        <h5> No applications receieved yet.</h5> 
        <h3> Public Relations </h3>
        <h5> No applications receieved yet.</h5> 
      </div>
      <div class="manage-project-page"><br /></div>
      </div>
      </>

    
    


    )
}
export default manageProjects