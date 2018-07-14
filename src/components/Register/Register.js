import React from 'react';
import {Link} from 'react-router-dom';
import authRequests from '../../firebaseRequests/auth.js'
import './Register.css';

class Register extends React.Component {
  state = {
    email: '',
    password: '',
  };

  registerUserClick = (e) => {
    e.preventDefault();
    const user = {...this.state};
    authRequests.registerUser(user).then(() => {
      this.props.history.push('/MyStuff');
    }).catch((err) => {
      console.error('Failed to register user to firebase: ', err);
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
      <div className="Register">
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
                  <Link to='/login' >Already Have an Account? Log-in</Link>
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default" onClick={this.registerUserClick}>Register</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
