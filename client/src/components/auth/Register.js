import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
	constructor(){
		super();
		this.state = {
			email: '',
			username: '',
			location: '',
			birthday: '',
			password: '',
			password2: ''
		}
	}

	onFormInputChange = (e) =>{
		this.setState({[e.target.name]: e.target.value});
	}

	onFormSubmit = (e) =>{
		e.preventDefault();
		const user = {
			username: this.state.username,
			email: this.state.email,
			location: this.state.location,
			birthday: this.state.birthday,
			password: this.state.password,
			password2: this.state.password2
		};

		axios.post("/api/auth/signup", user).then((res) =>{
			return console.log(res.data);
		}).catch(err => console.log(err.response.data));
	}

	onFormReset = (e) =>{
		this.setState({
			email: '',
			username: '',
			location: '',
			birthday: '',
			password: '',
			passwordConfirm: ''
		})
	}

	render() {
		return (
			<div role="tabpanel" className="tab-pane" id="signup">
	    	<form onSubmit={this.onFormSubmit} className="form">
	        <div className="form-group">
	          <label>Username <small>(required)</small></label>
	          <input 
	          	type="text" 
	          	name="username"
	          	onChange={this.onFormInputChange}
	          	className="form-control"
	          	placeholder="Enter Username" 
	          	value={this.state.username}
	          />
	        </div>

	        <div className="form-group">
	          <label>Email <small>(required)</small></label>
	          <input 
	          	type="email"
	          	name="email"
	          	onChange={this.onFormInputChange}
	          	className="form-control" 
	          	value={this.state.email}
	          	placeholder="Enter Email"
	          />
	        </div>

	        <div className="form-group">
	          <label>Location <small>(required)</small></label>
	          <input
	          	type="text"
	          	name="location"
	          	onChange={this.onFormInputChange}
	          	className="form-control"
	          	value={this.state.location}
	          	placeholder="Enter Location"
	          />
	        </div>

	        <div className="form-group">
	          <label>Birthday <small>(required)</small></label>
	          <input 
	          	type="date" 
	          	name="birthday"
	          	onChange={this.onFormInputChange}
	          	className="form-control" 
	          	placeholder="Enter D.o.B"
	          	value={this.state.birthday}
	          />
	        </div>

	        <div className="form-group">
	          <label>Password <small>(required)</small></label>
	          <input 
	          	type="password" 
	          	name="password"
	          	onChange={this.onFormInputChange}
	          	placeholder="Password"
	          	className="form-control" 
	          	value={this.state.password}
	          />
	        </div>

	        <div className="form-group">
	          <label>Confirm Password<small>(required)</small></label>
	          <input 
	          	type="password" 
	          	name="password2"
	          	onChange={this.onFormInputChange}
	          	placeholder="Password Confirmation"
	          	className="form-control" 
	          	value={this.state.password2}
	          />
	        </div>

					<br/>
	        <input type="submit" value="Signup" className="btn btn-danger btn-block"/>
					<br/>
	      </form>
	      <a href="#">Forgot Password?</a>
	    </div>
		);
	}
};

export default Register;