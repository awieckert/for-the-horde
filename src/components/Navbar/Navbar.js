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
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="">Brand</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                {
                  isAuthed ? (
                    <ul className="nav navbar-nav navbar-right">
                      <li><Link to='/MyStuff'>My Stuff</Link></li>
                      <li><Link to='/AllTheStuff'>All The Stuff</Link></li>
                      <li className='form-group'><button className='btn btn-danger' onClick={this.logOut}>Log Out</button></li>
                    </ul>
                  ) : (
                    <ul className="nav navbar-nav navbar-right">
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
