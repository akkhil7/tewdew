"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import { RouteHandler } from 'react-router';
import _ from 'lodash';
import TodooItem from './TodooItem.jsx'

class DashBoard extends React.Component{

  constructor () {
    super()
    this.state = {
      todos: [],
      user: undefined,
      isLoggedIn: true
    }
  }
  
  componentDidMount () {
    const _this = this
    var status;
    console.log(localStorage)
    if (this.state.isLoggedIn) {
      Request
      .post("http://localhost:3000/tokens/verify_token")
      .send({token: localStorage.token})
      .end((err,res) => {
        const user = JSON.parse(res.text).user
        console.log(user)
        _this.setState({user: user,
                        isLoggedIn: true})

        console.log(res.status)
        status = res.status
        if (res.status != 200)
          this.context.router.transitionTo('login');
        else if(res.status == 200) {
          Request.get("http://localhost:3000/todoo/")
          .set('Authorization', 'Token token=' + localStorage.token)
          .end((err,res) => {
            console.log(res);
            const response = JSON.parse(res.text).todos
            _this.setState({todos:response})
          }) 
        }
      })
    }
    else
      this.context.router.transitionTo('login');
  }
  
  logOut(e) {
    e.preventDefault();
    window.localStorage.token = ""
    console.log(localStorage)
    this.setState({
      isLoggedIn: false
    }, this.context.router.transitionTo('login'))
  }

  handleSubmit(e) {
    e.preventDefault();
    const todoo = this.refs.todoo.getDOMNode().value
    const todo = {
      name: todoo,
      done: false,
      user_id: this.state.user.id
    }
    Request.post("http://localhost:3000/todoo/")
    .set('Authorization', 'Token token=' + localStorage.token)
    .send({todo: todo})
    .end((err,res) => {
      var response = JSON.parse(res.text)
      var todos = this.state.todos
      todos.push(response)
      this.setState({todos:todos})
      this.refs.todoo.getDOMNode().value = ""
    })
  }

  render () {
    var todos = this.state.todos
    console.log()
    var TodooItems = todos.map((todo) => {
      return <TodooItem todo={todo} />
    })
    return (
      <div className="dashboard">
        <h1> Todoo App </h1>
        <span>Welcome Akhil</span>
        <a className='logout' href="#" onClick={this.logOut.bind(this)}> Logout </a>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="enter todoo" ref="todoo" className="todoo-box" />
          <input type="submit" className="todoo-submit"  />
        </form>
        {TodooItems}
      </div>
    );
  }
}

DashBoard.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports = DashBoard;
