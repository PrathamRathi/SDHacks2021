import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <h1>LEND A HAND</h1>
      <p class = "description-text">Our Mission is to connect grassroots social movements with volunteers who can lend their skills to help the movements grow and thrive. Whatever your skills, programming, finance, law - anything really - you can help and contribute to and improve organizations and movements you are passionate about.</p>
      <p class = "description-text"> As a project organizer, you can find people willing to give their time and help your movement out. Our platform makes it easy to find people who are passionate about the same issues you and have the ability to make a meaningful contribution to your movement. </p>
    </div>
  );
}

export default MainSection;
