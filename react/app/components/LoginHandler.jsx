"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class LoginHandler extends React.Component{
  constructor () {
    super()
  }

  handleLogin() {
    this.context.router.transitionTo('login');
  }
  
  handleRegister() {
    this.context.router.transitionTo('register');
  }

  render () {
    return (<div>
      <div className="background-blur"> </div>
      <div className="login-handler">
        <button className="login-button" onClick = {this.handleLogin.bind(this)}> Login </button>
        <span> or </span>
        <button className="register-button" onClick = {this.handleRegister.bind(this)}> Register </button>
      </div>
    </div>
    );
  }
}

LoginHandler.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports = LoginHandler;
