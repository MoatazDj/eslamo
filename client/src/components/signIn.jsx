import React from 'react';
import $ from 'jquery';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  resetState() {
    this.setState({
      email: '',
      password: '',
    });
  }

  handleClick(event) {
    event.preventDefault();
    var data = {};
    for (var keys in this.state) {
      data[keys] = this.state[keys];
    }
    console.log(data);
    $.get('http://localhost:5000/signin', data, function () {
      this.props.redirectSignUp();
      this.resetState();
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    return (
      <div>
        <h3>SignIn</h3>
        <form>
          <div className='form_signUp'>
            <div className='email'>
              <label name='email'>Email:</label>
              <br></br>
              <input
                type='text'
                id='email'
                value={this.state.email}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <hr></hr>
          <div className='form_signUp'>
            <div className='password'>
              <label name='password'>Password:</label>
              <br></br>
              <input
                type='Password'
                id='password'
                value={this.state.password}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <hr></hr>
          <div className='submit_form'>
            <button onClick={this.handleClick}>Log in</button>
          </div>
        </form>
        <hr></hr>
        <span>
          Don't have an account? -
          <button onClick={this.props.redirectSignUp}>Sign In!</button>
        </span>
      </div>
    );
  }
}

export default SignIn;
