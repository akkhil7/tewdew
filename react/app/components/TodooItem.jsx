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

  render () {
    if(!_.isEmpty(this.props.todo)) {
      var todo = this.props.todo
      var title = todo.name
    }
    return (
      <div>
      <Spring defaultValue={{val: 0}} endValue={{val:200, config: [120,17]}}>
      {interpolated =>
        <div className="todoo-item" style={{transform: 'translate3d(${interpolated.val}px, 0, 0)'}}>
        <p>{title}</p>
        </div>
      }
      </Spring>
      </div>
    );
  }
}

module.exports = TodooItem;
