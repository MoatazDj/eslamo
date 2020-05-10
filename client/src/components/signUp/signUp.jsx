import React from 'react';
import $ from 'jquery';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      gender: 'Male'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      gender: 'Male'
    });
  }

  handleClick(event) {
    event.preventDefault();
    var data = {};
    for (var keys in this.state) {
      data[keys] = this.state[keys];
    }
    $.post('http://localhost:5000/signup', data, function () {
      // this.props.redirectSignUp();
      // this.resetState();
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleGenderChange(event){
    this.setState({ gender : event.target.value})
  }

  render() {
    return (
      <div>
        <h3>SignUp</h3>
        <form>
          <div className='form_signUp'>
            <div className='first_name'>
              <label name='first_name'>First Name:</label>
              <br></br>
              <input
                type='text'
                id='first_name'
                value={this.state.first_name}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <hr></hr>
          <div className='form_signUp'>
            <div className='last_name'>
              <label name='user_last_name'>Last Name:</label>
              <br></br>
              <input
                type='text'
                id='last_name'
                value={this.state.last_name}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <hr></hr>
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
          <div className='form_signUp'>
            <div className='confirm_password'>
              <label name='confirm_password'>Confirm Password:</label>
              <br></br>
              <input
                type='Password'
                id='confirm_password'
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <hr></hr>
          <div className='form_signUp'>
            <div className='phone_number'>
              <label name='phone_number'>Phone Number:</label>
              <br></br>
              <input
                type='text'
                id='phone_number'
                value={this.state.phone_number}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <hr></hr>
          <div className='form_signUp'>
            <div className='gender'>
              <label name = 'gender'>Select your gender: </label>
              <select value = {this.state.gender} onChange = {this.handleGenderChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <hr></hr>
          <div className='submit_form'>
            <button onClick={this.handleClick}>Create your account!</button>
          </div>
        </form>
        <br></br>
        <hr></hr>
        <span>
          Already have an account? -
          <button onClick={this.props.redirectSignIn}>Sign In!</button>
        </span>
      </div>
    );
  }
}

export default SignUp;
