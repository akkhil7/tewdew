import React from 'react';
import Router from 'react-router';
import Request from 'superagent';

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  componentWillMount() {
    console.log(localStorage)
    if(window.localStorage.token != "")
      this.setState({isLoggedIn: true})
  }

  handleSubmit(e) {
    var inputs = document.getElementsByTagName('input');
    var username = inputs[0].value
    var password = inputs[1].value
    var user = {
      username: username,
      password: password
    }

    console.log(user);
    e.preventDefault();
    var _this = this
    Request.post("https://arcane-citadel-2839.herokuapp.com/tokens/verify")
    .send({user:user})
    .end((err,res) => {
      console.log(res);
      let response = JSON.parse(res.text)
      const token  = response.token
      if(res.status == 200) {
        _this.setState({
          isLoggedIn: true
        }) 
        this.context.router.transitionTo('dashboard')
        localStorage.token = token
      }
    })
  }

  logOut(e) {
    e.preventDefault();
    window.localStorage.token = ""
    console.log(localStorage)
    this.setState({
      isLoggedIn: false
    })
  }
  render () {
    return (
      <div>
        <div className="background-blur"> </div>
        <div className="form-container">
          <h2 className='form-text'> Login </h2>
          <hr />
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports = Login;
