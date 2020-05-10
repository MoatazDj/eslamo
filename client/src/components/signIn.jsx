import React from 'react';
import $ from 'jquery';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

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
    $.get('http://localhost:5000/signin', data, function () {
      this.resetState();
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  
  render() {
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline/>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div>
        <form>
          <div className='form_signUp'>
            <div className='email'>
              <TextField variant="outlined"
                margin="normal"
                required
                id="email"
                label="email Adress"
                name="email Adress"
                autoComplete="email Adress"
                autoFocus
                type='text'
                id='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form_signUp'>
            <div className='password'>
              <TextField variant="outlined"
                margin="normal"
                required
                id="password"
                label="Password"
                name="Password"
                autoComplete="Password"
                type='Password'
                id='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='submit_form'>
          <Button variant='outlined' color='secondary' onClick={this.handleClick}>Sign in</Button>
          </div>
        </form>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account?   "}
              </Link>
              <Button variant='outlined' color='secondary' >Sign up!</Button>
            </Grid>
        </div>
      </Container>
    );
  }
}

export default SignIn;
