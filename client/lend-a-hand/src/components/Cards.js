import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

//https://drive.google.com/uc?export=view&id=[id]
function Cards(props) {
  return (
    <div className='cards'>
     <h1>Check Out Some Amazing Movements!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {props.cards1.map((card) => {
              return (
                <CardItem
                  src={card.src}
                  text={card.text}
                  label={card.label}
                  path={card.path} 
                />
              )
            })}
          </ul>
          <ul className='cards__items'>
            {props.cards2.map((card) => {
              return (
                <CardItem
                  src={card.src}
                  text={card.text}
                  label={card.label}
                  path={card.path} 
                />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
