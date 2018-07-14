import React from 'react';
import {Link} from 'react-router-dom';
import authRequests from '../../firebaseRequests/auth.js';
import './Navbar.css';

class Navbar extends React.Component {

  logOut = () => {
    authRequests.userLogOut().then(() => {
      this.props.history.push('/');
    }).catch((err) => {
      console.error('User Failed to log out: ', err);
    });
  };

  render () {
    const isAuthed = this.props.authed;
    return (
      <div className="Navbar">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="">Brand</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                {
                  isAuthed ? (
                    <ul class="nav navbar-nav navbar-right">
                      <li><Link to='/MyStuff'>My Stuff</Link></li>
                      <li><Link to='/AllTheStuff'>All The Stuff</Link></li>
                      <li><button className='btn btn-danger' onClick={this.logOut}>Log Out</button></li>
                    </ul>
                  ) : (
                    <ul class="nav navbar-nav navbar-right">
                      <li><Link to='/login'>Login</Link></li>
                    </ul>
                  )
                }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
