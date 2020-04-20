import React, { Component } from 'react';
import './App.css';
import userService from '../../utils/userService';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignupPage from '../../pages/SignupPage/SignupPage';

import * as noteAPI from '../../utils/noteService';
import NoteListPage from '../../pages/NoteListPage/NoteListPage'
import AddNotePage from '../../pages/AddNotePage/AddNotePage'
import NoteDetailPage from '../../pages/NoteDetailPage/NoteDetailPage';
import EditNotePage from '../../pages/EditNotePage/EditNotePage';


class App extends Component {
  state = {
    user: userService.getUser(),
    notes: []
  };

  handleAddNote = async newNteData => {
    const newNte = await noteAPI.create(newNteData);
    this.setState(state => ({
      notes: [...state.notes, newNte]
    }),
    () => this.props.history.push('/'));
  }
  handleUpdateNote = async updatedNteData => {
    const updatedNote = await noteAPI.update(updatedNteData);
    const newNotesArray = this.state.notes.map(p =>
      p._id === updatedNote._id ? updatedNote : p
      );
      this.setState(
        {notes: newNotesArray},
        () => this.props.history.push('/')
      );
  }

  handleDeleteNote= async id => {
    await noteAPI.deleteOne(id);
    this.setState(state => ({
      notes: state.notes.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }



  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  async componentDidMount() {
    const notes = await noteAPI.getAll();
    this.setState({notes});
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          Hearing Aid Second Opinion
          <nav>
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
        <div style={{ display: "flex" }}>
        <div style={{ flex: "1", fontSize: "20px", borderStyle: 'solid', fontWeight: 'bold'}}>

          <p>
            Welcome to the Hearing Aid Second Opinion. Getting a hearing aid to treat your hearing loss can be difficult and 
            expensive. Making the wrong decision means you are left in the same place where you started.
          </p>
          <p>
            I am Board Certified in Hearing Instrument Science (BC-HIS) and licensed to dispense hearing aids in the state of California (HAD). 
            The only thing I am offering you is an honest evaluation of your hearing loss and how to treat it with hearing aids. 
          </p>
          <p>
            You will receive a 90-minute consultation where I will evaluate your hearing history, audiogram results, and discuss 
            what kind of hearing aid will help you and where you should buy it. 
          </p>
          <p>
            I have personally vetted a select group of hearing aid offices that will provide you with top-level service and cutting edge technology.
          </p>
          <p>
            The consultation fee is $250. 
          </p>
          <p>
          When you are ready, please email us your contact information, audiogram, and any price quotes you have received. 
            You will receive a call shortly to schedule a consultation.
          </p>
          <p>
          <a href="mailto:secondopinion@hearingaidsecondopinion.com?Subject=Second%20Opinion%20needed" target="_top">secondopinion@hearingaidsecondopinion.com</a>
          </p>
        </div>
        <div style={{ flex: "1", borderStyle: 'solid' }}>
        <main>
            <>
            <Route exact path='/' render={() => 
              <NoteListPage
                notes={this.state.notes}
                handleDeleteNote={this.handleDeleteNote}
              />
            } />
            <Route exact path='/add' render={() => 
              <AddNotePage
                handleAddNote={this.handleAddNote}
              />
            }/>
            <Route exact path='/details' render={({location}) => 
              <NoteDetailPage location={location}/>
            } />
            <Route exact path='/edit' render={({location}) => 
              <EditNotePage
                handleUpdateNote={this.handleUpdateNote}
                location={location}
              />
              
            } />
            </>
        </main>
        </div>
        </div>
      </div>
    );
  }
}

export default App;