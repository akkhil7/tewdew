"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import { Spring } from 'react-motion';

class TodooItem extends React.Component{

  constructor () {
    super()
  }

  handleChange() {
    alert("hey")
  }
  
  toggleState() {
    var todo = this.props.todo
    todo.done = !todo.done
    let _this = this
    Request
      .put("https://arcane-citadel-2839.herokuapp.com/todoo/"+todo.id)
      .set('Authorization', 'Token token=' + localStorage.token)
      .send({todo:todo})
      .end((err,res) => {
        console.log(res)
        Request
          .get("https://arcane-citadel-2839.herokuapp.com/todoo/")
          .set('Authorization', 'Token token=' + localStorage.token)
          .end((err,res) => {
            const response = JSON.parse(res.text).todos
            _this.setState({todos:response})
        })
    })
}
  render () {
    if(!_.isEmpty(this.props.todo)) {
      var todo = this.props.todo
      var title = todo.name
      if(todo.done)
        var todooClass = "todoo-item done"
      else
        var todooClass = "todoo-item"

      var completed = todo.done ? "complete" : "incomplete"
    }
    return (
      <div>
      <Spring defaultValue={{val: 0}} endValue={{val:20, config:[120,5]}}>
      {interpolated => {
        return (
          <div className={todooClass} 
            style={{transform: 'translateY(' + interpolated.val + 'px)',
            }}>
          <button className={completed} onClick={this.toggleState.bind(this)}> W </button>            
          <p onChange={this.handleChange.bind(this)}>{title}</p>
        </div>
        )
      }}
      </Spring>
      </div>
    );
  }
}

module.exports = TodooItem;
