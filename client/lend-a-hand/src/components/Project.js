import React from 'react';
import { Link } from 'react-router-dom';

function Project(props) {
  return (
    <>
      <li className='project__item'>
        <Link className='project__item__link' to={props.path}>
          <figure className='project__item__pic-wrap' data-category={props.label}>
            <img
              className='project__item__img'
              src={props.src}
              alt='Image'      
            />
          </figure>
          <div className='project_item__info'>
            <h5 className='project__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Project;
