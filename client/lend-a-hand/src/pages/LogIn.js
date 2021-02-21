import React from 'react';
import '../components/LogIn.css';
import { Link, Redirect } from 'react-router-dom';

function LogIn() {
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const submission = {
      email: state.email,
      password: state.password
    };
    const response = await fetch(`http://127.0.0.1:8000/api/user/login`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submission)
    });
    return(
      <Redirect to="/user"/>
    )
  }
  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  }
  return (
    <>
    <div class="login-page"></div>
        <div class="left">
          <div class="centered">
            <form onSubmit={handleSubmit}>
              <div class="login-container">
                <h1>Log In</h1>
                <hr></hr>
                <p>Email</p>
                <input type="text" onChange={handleChange('email')} placeholder="Enter Email" name="email"  />

                <p>Password</p>
                <input type="password" onChange={handleChange('password')} placeholder="Enter Password" name="psw"  />
              
                <div>
                  <Link to='/user' className='login-btn'>Log In</Link>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="right">
          <div class="centered">
            <form action="action_page.php">
              <div class="login-container">
                <h1>Sign Up</h1>
                <hr></hr>

                <p>First Name</p>
                <input type="text" placeholder="Enter First Name" name="firstName"  />

                <p>Last Name</p>
                <input type="text" placeholder="Enter Last Name" name="lastName"  />

                <p>Phone Number</p>
                <input type="text" placeholder="Enter Phone Number" name="phoneNum"  />
                  
                <p>Email</p>
                <input type="text" placeholder="Enter Email" name="email"  />

                <p>Select Skills:    </p><br />
                <label><b class="login-form-text">Developer </b><input type="checkbox"/></label><br />
                <label><b class = "login-form-text">Lawyer </b><input type="checkbox"/></label><br />
                <label><b class = "login-form-text">Public Relations </b><input type="checkbox"/></label><br />
                <label><b class = "login-form-text">Finances </b><input type="checkbox"/></label><br />
                <label><b class = "login-form-text">Accounting </b><input type="checkbox"/></label><br />
                <label><b class = "login-form-text">Management </b><input type="checkbox"/></label><br />
                
                <p>Password</p><br />
                <input type="password" placeholder="Enter Password" name="psw"  />

                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="psw-repeat"  />

                <div>
                  <Link to='/user' className='signup-btn'>Sign Up</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div class="login-page"></div>
        </>
  );
  
}

export default LogIn;
