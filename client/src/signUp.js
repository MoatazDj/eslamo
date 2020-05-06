import React from 'react';
import $ from 'jquery';

class signUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form: 0,
            username : "",
            user_familyname : "",
            email : "",
            password : "",
            confirm_password : "",
            date_of_birth : "",
            month_of_birth: "",
            year_of_birth: "",
            checked: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event){
        event.preventDefault();
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleCheckboxChange(event) {
         this.setState({ checked: event.target.checked })
      }
      render () {
          return(
            <div>
                <h3>SignUp</h3>
                <form action="/signUp" method="post">
                <div className = "form_signUp">
                    <div className="username">
                        <label name = "username">Name:</label><hr></hr>
                        <input type = "text" id = "username" value = {this.state.username} onChange = {this.handleChange}></input>
                    </div>
                </div>
                <div className = "form_signUp">
                    <div className="user_familyname">
                        <label name = "user_familyname">Family Name:</label><hr></hr>
                        <input type = "text" id = "user_familyname" value = {this.state.user_familyname} onChange = {this.handleChange}></input>
                    </div>
                </div>
                <div className = "form_signUp">
                    <div className="email">
                        <label name = "email">Email:</label><hr></hr>
                        <input type = "text" id = "email" value = {this.state.email} onChange = {this.handleChange}></input>
                    </div>
                </div>
                <div className = "form_signUp">
                    <div className="password">
                        <label name = "password">Password:</label><hr></hr>
                        <input type = "text" id = "password" value = {this.state.password} onChange = {this.handleChange}></input>
                    </div>
                </div>
                <div className = "form_signUp">
                    <div className="confirm_password">
                        <label name = "confirm_password">Confirm Password:</label><hr></hr>
                        <input type = "text" id = "confirm_password" value = {this.state.confirm_password} onChange = {this.handleChange}></input>
                    </div>
                </div>
                <div className = "form_signUp">
                    <div className = "Birth">
                    <label name = "date_of_birth">Date Of Birth:</label><hr></hr>
                        <input type = "text" id = "date_of_birth" value = {this.state.date_of_birth} onChange = {this.handleChange}></input>
                        <label name = "month_of_birth">Month Of Birth:</label><hr></hr>
                        <input type = "text" id = "month_of_birth" value = {this.state.month_of_birth} onChange = {this.handleChange}></input>
                        <label name = "year_of_birth">Year Of Birth:</label><hr></hr>
                        <input type = "text" id = "year_of_birth" value = {this.state.year_of_birth} onChange = {this.handleChange}></input>
                    </div>
                </div>
                <div className = "form_signUp">
                    <div className="gender">
                        <label name = "gender">
                            <span>Select your gender:</span><hr></hr>
                            <span>male</span>
                            <Checkbox checked={this.state.checked} onChange={this.handleCheckboxChange}/>
                            <span>Female</span>
                            <Checkbox checked={this.state.checked} onChange={this.handleCheckboxChange}/>
                        </label>
                    </div>
                </div>
                
                </form>
            </div>
          )
      }
}

export default signUp;