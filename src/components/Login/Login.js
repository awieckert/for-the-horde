import React from 'react';
import {Link} from 'react-router-dom';
import authRequests from '../../firebaseRequests/auth.js';
import './Login.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  loginUser = (e) => {
    e.preventDefault();
    const user = {...this.state};
    authRequests(user).then(() => {
      this.props.history.push('/MyStuff');
    }).catch((err) => {
      console.error('Login Failed: ', err);
    });
  };

  emailChange = (e) => {
    const newEmail = e.target.value;
    this.setState({email: newEmail});
  };

  passwordChange = (e) => {
    const newPassword = e.target.value;
    this.setState({password: newPassword});
  };

  render () {
    const user = this.state;
    return (
      <div className="Login">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputEmail" className="col-sm-2 control-label">Email: </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={user.email} onChange={this.emailChange}></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={user.password} onChange={this.passwordChange}></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label>
                  <Link to='/register' >Create Account</Link>
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default" onClick={this.loginUser}>Sign in</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
