import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function Project(props) {
  return (
    <>
    <div class="project-page">
        <h2>{props.name}</h2>
        <h5>{props.description}</h5>
        < br/>
        <h6> Looking for:  {props.seeking}</h6>
        <br />
        <li className='project-item'>
          
          <figure data-category={props.label}>
            <img
              src={props.src}
              alt='Image'      
            />
          </figure>
        
        </li>
      </div>
    </>
  );
}

export default Project;
