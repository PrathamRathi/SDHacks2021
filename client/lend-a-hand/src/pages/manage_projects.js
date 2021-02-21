import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import '../components/manage_projects.css';
import { Link } from 'react-router-dom';
import Project from '../components/Project.js'

function manageProjects(){
    return(
      <>
      <Project name={'Fighting To Close Wage Gap'} description={'Working to close the wage gap in the tech industry. In need of developers and accountants!'} 
        src={'https://drive.google.com/uc?export=view&id=13orbF5EZDwkZVeJXH21tI_qym9VU-PEC'}
        label = "Gender Equality"
      />
      
      </>
    
    )
}
export default manageProjects