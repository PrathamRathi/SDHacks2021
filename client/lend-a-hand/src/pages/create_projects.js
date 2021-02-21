import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import '../components/create_project.css';
import { Link } from 'react-router-dom';

function createProjects(){
    return(
        <>
        <div className='create-project-page'></div>
            <div class="centeredCP">
                <h1>Create your movement!</h1>
                <hr></hr>
                <form action="action_page.php">
                <div class="create-form">

                <h3>What is your project going to be called?</h3>
                <input type="projecttext" placeholder="Enter Your Project's Name" name="projectName"  />

                <h3>When will your project start?</h3>
                <input type="projecttext" placeholder="Start Date" name="date"  />

                <h3>Summarize your movement. What makes it unique and powerful?</h3>
                <input type="projecttext" placeholder="Enter description" name="description"  />
                    
                <h3>A strong way to see the most driven applicants is to ask questions. Enter any questions you want applicants to answer here.</h3>
                <input type="projecttext" placeholder="Enter questions" name="questions"  />

                <h3>What categories does your movement encompass?</h3>
                <br />
                <label><b class = "project-skills">Education </b><input type="checkbox"/></label><br />
                <label><b class = "project-skills">‎‎Gender Equality </b><input type="checkbox"/></label><br />
                <label><b class = "project-skills">Police </b><input type="checkbox"/></label><br />
                <label><b class = "project-skills">Health Care </b><input type="checkbox"/></label><br />
                <label><b class = "project-skills">Civil Rights </b><input type="checkbox"/></label><br />
                <label><b class = "project-skills">Disaster Relief </b><input type="checkbox"/></label><br />
                <label><b class = "project-skills">Fundraising </b><input type="checkbox"/></label><br />
                <br />
                <h3>What roles do you need fulfilled?</h3>
                <br />
                <label><b class = "project-skills">Software Developer </b><input type="checkbox"/></label><br />
                <label><b class = "project-skills">Accountant </b><input type="checkbox"/></label><br />
                <label><b class = "project-skills">Finance </b><input type="checkbox"/></label><br />
                <label><b class = "project-skills">Management </b><input type="checkbox"/></label><br />
                <label><b class = "project-skills">Public Relations </b><input type="checkbox"/></label><br />
                <label><b class = "project-skills">Merchandise </b><input type="checkbox"/></label><br />
                <label><b class = "project-skills">Lawyer </b><input type="checkbox"/></label><br />
                <br />
                <h3> Project Photo</h3> <br />
                <input type="file" id="myFile" name="Project Photo" class="chooseFile"></input>
                <h3>You are all set! Your project will be set up and can now start receiving responses.</h3><br />
                <h3>To look at applications, edit project information, and more, head over to the "Manage Projects" tab on the home page.</h3><br />

                <div class="clearfix">
                <Link to='/user' className='create-project-btn'>Create Project</Link>
                </div>
                </div>
                </form>
            </div>
            <div className='create-project-page'></div>
        </>
    )
}
export default createProjects