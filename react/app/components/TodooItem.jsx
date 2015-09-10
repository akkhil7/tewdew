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
    alert("wow")
  }
  render () {
    if(!_.isEmpty(this.props.todo)) {
      var todo = this.props.todo
      var title = todo.name
      if(!todo.done)
        var todooClass = "todoo-item done"
      else
        var todooClass = "todoo-item"
    }
    return (
      <div>
      <Spring defaultValue={{val: 0}} endValue={{val:20, config:[120,5]}}>
      {interpolated => {
        return (
          <div className={todooClass} 
            style={{transform: 'translateY(' + interpolated.val + 'px)',
          }}>
          <p onChange={this.handleChange.bind(this)}>{title}</p>
          <button onClick={this.toggleState.bind(this)}> W </button>
        </div>
        )
      }}
      </Spring>
      </div>
    );
  }
}

module.exports = TodooItem;
