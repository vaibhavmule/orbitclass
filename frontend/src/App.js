import React, { Component } from 'react';

import {register, login} from './Auth'

class App extends Component {
  state = {
    email: '',
    password: ''
  }

  handleTextInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3>OrbitClass</h3>
        <p>SignUp</p>
        <form onSubmit={this.handleSubmit}>
          <input
            id="email"
            name="email"
            onChange={this.handleTextInputChange}
            value={this.state.email}
          />
          <br />
          <input
            id="password"
            type='password'
            name="password"
            onChange={this.handleTextInputChange}
            value={this.state.password}
          />
          <br/>
          <button>
            Sign Up
          </button>
        </form>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('')
    login(
      this.state.email,
      this.state.password
    )
    .then(() => console.log('register'))
  }

  handleTextInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

}

export default App;
