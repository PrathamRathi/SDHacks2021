import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Footer from '../components/Cards';

const cards1 = [
  {
    'src' : 'https://drive.google.com/uc?export=view&id=13orbF5EZDwkZVeJXH21tI_qym9VU-PEC',
    'text' : 'Fighting To Close Wage Gap',
    'label' : 'Gender',
    'path' : '/services',
  },
  {
    'src' : 'https://drive.google.com/uc?export=view&id=1JUtNQkOJy5E830lM3kYDIYZvIQmcS9iF',
    'text' :'Improving Underprivileged Schools',
    'label' : 'Education',
    'path' : '/services',
  }
]
const cards2 = [
  {
    'src' : 'https://drive.google.com/uc?export=view&id=1D4OQw34Wgk9sDtZ1hENcC7heQBhzjH-O',
    'text' : 'Ending Police Injustice',
    'label' : 'Police',
    'path' : '/services',
  },
  {
    'src' : 'https://drive.google.com/uc?export=view&id=12yifXGuqVgGy7Yw7sbSFwyt5e51ihHXt',
    'text' : 'Improving Health Care Outcomes for Underprivledged Communities.',
    'label' : 'Health Care',
    'path' : '/sign-up', 
  }
]

function Volunteer() {
  return (
    <>
    <div className='volunteer-container'>
      <h1>Volunteer</h1>
      <p class = "description-text">As a volunteer, you have the opportunity to exercise your skill set in a manner that will support the community.
      Every day, new movements arise that require a certain collection of abilities to fully blossom into a full fledged movement that can change lives. 
      As a volunteer on Lend-A-Hand, you can help spark that change. Sign up for free today. </p>
    </div>
    <Cards cards1={cards1} cards2={cards2}/>
    </>
  );
  
}

export default Volunteer;
