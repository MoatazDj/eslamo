import React from 'react';
import $ from 'jquery';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_first_name: '',
      user_last_name: '',
      email: '',
      password: '',
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
      user_first_name: '',
      user_last_name: '',
      email: '',
      password: '',
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
      <Container component="main" maxWidth="xs">
      <CssBaseline />
        <Typography component="h1" variant="h5" style = {{marginTop : 40}}>
          Sign Up
        </Typography>
        <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField  variant="outlined"
                margin="normal"
                required
                id="First Name"
                label="First Name"
                name="First Name"
                autoComplete="First Name"
                autoFocus
                fullWidth
                type='text'
                id='user_first_name'
                value={this.state.user_first_name}
                onChange={this.handleChange}
                />
            </Grid>
          <Grid item xs={12} sm={6}>
              <TextField variant="outlined"
                margin="normal"
                required
                id="Last Name"
                label="Last Name"
                name="Last Name"
                autoComplete="Last Name"
                autoFocus
                fullWidth
                type='text'
                id='user_last_name'
                value={this.state.user_last_name}
                onChange={this.handleChange}
                />
            </Grid>
            <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
              <TextField variant="outlined"
                margin="normal"
                required
                id="Phone Number"
                label="Phone Number"
                name="Phone Number"
                autoComplete="Phone Number"
                type='text'
                id='phone_number'
                value={this.state.phone_number}
                onChange={this.handleChange}
                />
                </Grid>
                <Grid item xs={12}>
            <InputLabel htmlFor="select">Gender</InputLabel>
              <NativeSelect id="select" value = {this.state.gender} onChange = {this.handleGenderChange}>
                <option value="10">Male</option>
                <option value="20">Female</option>
              </NativeSelect>
              </Grid>
          <br></br>
          <Grid item xs={12}></Grid>
          <Button variant='outlined' color='secondary' onClick={this.handleClick}>Create your account!</Button>
          </Grid>
        </form>
        <br></br>
            <Grid item>
              <Link href="#" variant="body2">
                {"Already have an account?  "}
              </Link>
              <Button variant='outlined' color='secondary' >Sign In!</Button>
            </Grid>
            </Container>
    );
  }
}

export default SignUp;
