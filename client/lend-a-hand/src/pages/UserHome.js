import React from 'react';
import '../components/UserHome.css';
import { Link } from 'react-router-dom';
import CardItem from '../components/CardItem';
/*
*search bar 
*create a project
*manage projects
*participating projects
*search results page
*/

function UserHome(){
    return(

        <body class="user-page">

            <div class="user-main">

                <h1>Home</h1>
                <hr></hr> 
                <div class="user-button-container">
                    <button class="user-btns"><Link to='/manageProjects' className='manage-text'>Manage my projects</Link></button>
                </div><div class="user-button-container">
                    <button class="user-btns"><Link to='/createProject' className='create-text'>Create a project</Link></button>
                </div><div class="user-button-container">
                    <button class="user-btns"><Link to='/user' className='projects-text'>Projects I am a part of</Link></button>
                </div><div class="user-button-container">
                    <button class="user-btns"><Link to='/user' className='profile-text'>Manage my profile</Link></button>
                </div>
                
                <form action="action_page.php">
                    <div class="search-form">       
                        <p>Search for projects near you</p>
                        <input type="project" placeholder="Search for a project" name="searchProject" />
                    </div>
                </form>

                <div class="suggested_products">
                    <h2>Suggested Projects</h2>
                    <div class='user-suggested-cards'>
                        <ul class='cards__items1'>
                        <CardItem
                        src='https://drive.google.com/uc?export=view&id=13orbF5EZDwkZVeJXH21tI_qym9VU-PEC'
                        text='Fighting To Close Wage Gap'
                        label='Gender Equality'
                        path='/services' 
                        />
                        <CardItem
                        src='https://drive.google.com/uc?export=view&id=1JUtNQkOJy5E830lM3kYDIYZvIQmcS9iF'
                        text='Improving Underprivileged Schools'
                        label='Education'
                        path='/services'
                        />
                        </ul>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default UserHome;
                              