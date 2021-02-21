import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import '../components/apply_projects.css';
import { Link } from 'react-router-dom';
import Project from '../components/Project.js'

function applyProjects(){
    return(
      <>
      <Project name={'Fighting To Close Wage Gap'} description={'Working to close the wage gap in the tech industry. In need of developers and accountants!'} 
        src={'https://drive.google.com/uc?export=view&id=13orbF5EZDwkZVeJXH21tI_qym9VU-PEC'}
        label = "Gender Equality"
      />
      <div class="user-button-container">
                    <button class="user-btns"><Link to='/apply' className='manage-text1'>Apply</Link></button>
                </div>
       <h1>Donate</h1>
        <p>Thank you for donating!</p>

        <form method="POST" action="">
            <div>
            <label for="name">Name: </label>
            <input id="name" type="text" name="name"></input>
            </div>
            <div>
            <label for="email">Email address: </label>
            <input id="email" type="email" name="email"></input>
            </div>
            <div>
            <label for="amount">Amount: </label>
            <input id="amount" type="number" name="amount" min="10"></input>
            </div>
            <div>
            <form method="POST" action="/donate/thanks" id="card">
          <div>
            <label for="cardholder-name">Cardholder name: </label>
            <input id="cardholder-name" type="text" name="cardholder-name" value="{{name}}"></input>
          </div>
          <div>
            <label for="card-element">Credit or debit card:</label>
            <div id="card-element"></div>
          </div>
          <div id="card-errors"></div>
          <div>
            <button id="card-button" data-secret="{{intentSecret}}">Donate ${2}</button>
          </div>
          </form>
              <button type="submit">Next</button>
              </div>
          </form>
      
      </>
    
    )
}

export default applyProjects