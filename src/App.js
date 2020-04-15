import React, {Component} from 'react';
import './App.css';
import SignupForm from './components/SignupForm/SignupForm'
import userService from './utils/userService'
import {Route, NavLink} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import LoginPage from './pages/LoginPage/LoginPage'

class App extends React.Component {
  state = {
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  render() {
    return (
      <div className="App">
        <header> The Second Opinion</header>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <LoginPage handleSignupOrLogin={this.handleSignupOrLogin} />
        {/* <SignupForm handleSignupOrLogin={this.handleSignupOrLogin}/> */}
      </div>
    );
  }
}

export default App;
