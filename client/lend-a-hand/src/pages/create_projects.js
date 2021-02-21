import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import '../components/create_project.css';
import { Link } from 'react-router-dom';

function createProjects(){
    return(
        <body className='create-project-page'>
            <div class="centeredCP">
            <form action="action_page.php">
                <h1>Create your movement!</h1>
                <hr></hr>
                <h3>What is your project going to be called?</h3>
                <label><b class = "from-text">Project Name</b></label>
                <input type="text" placeholder="Enter Your Project's Name" name="projectName"  />

                <h3>When will your project start?</h3>
                <label><b class = "from-text">Start Date</b></label>
                <input type="text" placeholder="00/00/0000" name="date"  />

                <h3>Summarize your movement. What makes it unique and powerful?</h3>
                <label><b class = "from-text">Description</b></label>
                <input type="text" placeholder="Enter description" name="description"  />
                    
                <h3>A strong way to see the most driven applicants is to ask questions. Enter any questions you want applicants to answer here.</h3>
                <label><b class = "from-text">Questions</b></label>
                <input type="text" placeholder="Enter questions" name="questions"  />

                <h3>What categories does your movement encompass?</h3>
                <label for="psw"><b class = "from-text">Categories:    </b></label><br />
                <label><b class = "from-text">Education </b><input type="checkbox"/></label>
                <label><b class = "from-text">Gender Equality</b><input type="checkbox"/></label><br />
                <label><b class = "from-text">Police </b><input type="checkbox"/></label>
                <label><b class = "from-text">Health Care </b><input type="checkbox"/></label><br />
                <label><b class = "from-text">Civil Rights </b><input type="checkbox"/></label><br />
                <label><b class = "from-text">Disaster Relief </b><input type="checkbox"/></label>
                <label><b class = "from-text">Fundraising </b><input type="checkbox"/></label><br />
                <br />
                <b class = "from-text"> Project Photo   </b> <br />
                <input type="file" id="myFile" name="Project Photo"></input>
                <h3>You are all set! Your project will be set up and can now start receiving responses.</h3><br />
                <h3>To look at applications, edit project information, and more, head over to the "Manage Projects" tab on the home page.</h3><br />

                <div class="clearfix">
                <button class="loginbtn"><Link to='/user' className='login-btn'>Submit</Link></button>
                </div>
            </form>
            </div>
        </body>
    )
}
export default createProjects