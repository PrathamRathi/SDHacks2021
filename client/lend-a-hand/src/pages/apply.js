import React from 'react';
import { Link } from 'react-router-dom';
import '../components/apply.css';

function apply(){
    return (
        <>
            <div class="apply-container">
                <h1>Apply for a project</h1>
                <hr></hr>
                <p>Question: What are your skills? Why do you want to join our movement?</p>
                <input type="answer-text" placeholder="Answer"  />
                <p> Resume </p> <br />
                <input type="file" id="myFile" name="Project Photo" class="resume"></input>
                <br />
                <div>
                  <Link to='/user' className='apply-forproject-btn'>Apply</Link>
                </div>
            </div>
        </>
    )
}

export default apply