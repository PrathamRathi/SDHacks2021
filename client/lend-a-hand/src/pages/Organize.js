import React from 'react';
import '../App.css';
import Cards from '../components/Cards';

const cards1 = [
  {
    'src' : 'https://drive.google.com/uc?export=view&id=13orbF5EZDwkZVeJXH21tI_qym9VU-PEC',
    'text' : 'Fighting To Close Wage Gap',
    'label' : 'Gender',
    'path' : '/project',
  },
  {
    'src' : 'https://drive.google.com/uc?export=view&id=1JUtNQkOJy5E830lM3kYDIYZvIQmcS9iF',
    'text' :'Improving Underprivileged Schools',
    'label' : 'Education',
    'path' : '/project',
  }
]
const cards2 = [
  {
    'src' : 'https://drive.google.com/uc?export=view&id=1D4OQw34Wgk9sDtZ1hENcC7heQBhzjH-O',
    'text' : 'Ending Police Injustice',
    'label' : 'Police',
    'path' : '/project',
  },
  {
    'src' : 'https://drive.google.com/uc?export=view&id=12yifXGuqVgGy7Yw7sbSFwyt5e51ihHXt',
    'text' : 'Improving Health Care Outcomes for Underprivledged Communities.',
    'label' : 'Health Care',
    'path' : '/project', 
  }
]

export default function Organize() {
  return (
    <>
    <div className='organize-image'>
    <div className='organize-container'>  
      <h1>Organize</h1>
      <p class = "description-text">Do you have an idea for a non-profit that can benefit the greater community but don't know how to take it to the next stage? 
      At Lend-A-Hand, we can connect your project's proposal to volunteers who have the skills necessary to turn the proposal into reality.
      Don't keep your ideas in your head. Sign up today and start helping your community now!
       </p>
    </div>
    </div>
    <Cards cards1={cards1} cards2={cards2}/>
    </>
  );
}
