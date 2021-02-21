import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

const cards1 = [
  {
    'src' : 'https://drive.google.com/uc?export=view&id=13orbF5EZDwkZVeJXH21tI_qym9VU-PEC',
    'text' : 'Fighting To Close Wage Gap',
    'label' : 'Gender Equality',
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

function Home() {
  return (
    <>
      <MainSection />
      <Cards cards1={cards1} cards2={cards2}/>
      <Footer />
    </>
  );
}

export default Home;
