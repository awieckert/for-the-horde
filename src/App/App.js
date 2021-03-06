import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import firebase from 'firebase';
import firebaseConnect from '../firebaseRequests/fbInitialize.js';
import AllTheStuff from '../components/AllTheStuff/AllTheStuff.js';
import Home from '../components/Home/Home.js';
import Login from '../components/Login/Login.js';
import MyStuff from '../components/MyStuff/MyStuff.js';
import Register from '../components/Register/Register.js';
import Navbar from '../components/Navbar/Navbar.js';
import BigItem from '../components/BigItem/BigItem.js';
import './App.css';
firebaseConnect();

const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/MyStuff', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

class App extends Component {
  state = {
    authed: false,
  };

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar authed={this.state.authed} logOut={this.logOut} />
            <div className='container'>
              <div className='row'>
                <Switch>
                  <Route path='/' exact component={Home}/>
                  <PublicRoute path='/register' authed={this.state.authed} component={Register}/>
                  <PublicRoute path='/login' authed={this.state.authed} component={Login}/>
                  <PrivateRoute path='/MyStuff' authed={this.state.authed} component={MyStuff}/>
                  <PrivateRoute path='/AllTheStuff' authed={this.state.authed} component={AllTheStuff}/>
                  <PrivateRoute path='/BigItem' authed={this.state.authed} component={BigItem}/>
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
