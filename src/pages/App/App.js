import React, {Component} from 'react';
import '../../pages/App/App.css';
import userService from '../../utils/userService';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignupPage from '../../pages/SignupPage/SignupPage';

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
        <header className='header-footer'>
          The Second Opinion
          <nav>
            <NavLink exact to='/'>VIEW NOTES</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>ADD NOTES</NavLink>
        <Switch>
          <Route exact path='/' render={() =>
            <NavBar 
            user={this.state.user} 
            handleLogout={this.handleLogout}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
        </nav>
        </header>
      </div>
    );
  }
}

export default App;