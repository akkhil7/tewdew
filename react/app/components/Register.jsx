"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';

class Register extends React.Component{

  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit(e) {
    e.preventDefault();
    var inputs = document.getElementsByTagName('input');
    var first_name = inputs[0].value;
    var last_name  = inputs[1].value;
    var username   = inputs[2].value;
    var email      = inputs[3].value;
    var password   = inputs[4].value;

    var user = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      email: email
    }

    Request.post("https://arcane-citadel-2839.herokuapp.com/users")
    .send({user:user})
    .end((err,res) => {
      console.log(res);
    })
  }

  render () {
    return (
      <div>
        <div className="background-blur"> </div>
        <div className="form-container">
          <h2 className="form-text"> Register </h2>
          <hr />
          <form onSubmit={this.handleSubmit}> 
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    );
  }
};

module.exports = Register;
