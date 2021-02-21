import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Organize from './pages/Organize';
import Volunteer from './pages/Volunteer';
import LogIn from './pages/LogIn';
import UserHome from './pages/UserHome';
import createProjects from './pages/create_projects';
import manageProjects from './pages/manage_projects'
import applyProjects from './pages/apply_project'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/volunteer' component={Volunteer} />
          <Route path='/organize' component={Organize} />
          <Route path='/log-in' component={LogIn} />
          <Route path='/user' component={UserHome} />
          <Route path = '/createProject' component={createProjects} />
          <Route path = '/manageProjects' component={manageProjects} />
          <Route path = '/project' component={applyProjects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
