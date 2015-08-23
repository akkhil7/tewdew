import React from 'react'
import { RouteHandler } from 'react-router'
import Style from '../styles/app.scss'
import _ from 'lodash'



class App extends React.Component {
  render () {

    return (
      <div>
        <RouteHandler />
      </div>
    )
  }

};

module.exports = App;
