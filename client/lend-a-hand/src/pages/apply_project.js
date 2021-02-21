import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import '../components/apply_projects.css';
import { Link } from 'react-router-dom';
import Project from '../components/Project.js'
import Donation from '../components/Donation.js';

function applyProjects(){
    return(
      <>
      <Project name={'Equal Means Equal'} description={'In our effort to work to ratify the Equal Rights Ammendment, we need developers who can help us make a mobile app and improve our website, so that we can reach and connect with more supporters. We also need to declare as a 501(c) so we are looking for accountants who have expierence with that.'} 
              src={'https://drive.google.com/uc?export=view&id=13orbF5EZDwkZVeJXH21tI_qym9VU-PEC'}
              label = "Gender Equality"
              seeking = "Software Engineers, Accountants, and Public Relations"
          />

      <div class="apply-project-page">
        <br />
        <div class="apply-btn-container">
          <button class="apply-btn"><Link to='/apply' className='apply-text'>Apply</Link></button>
        </div>
        <div class="apply-btn-container">
          <button class="apply-btn"><Link to='/donation' className='donate-text'>Donate</Link></button>
        </div>
      </div>
      <div class="apply-project-page"><br /><br /><br /><br /></div>
      </>
    
    )
}

export default applyProjects