import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginAction } from "../../Actions/authAction";
import FormInputField from "../../helpers/FormElements/FormInputField";
import InputSubmitBtn from "../../helpers/FormElements/InputSubmit";

class Login extends Component {
	constructor(){
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		}
	}

	onFormInputChange = (e) =>{
		this.setState({[e.target.name]: e.target.value});
	};

	onFormSubmit = (e) =>{
		e.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password
		};

		this.props.loginAction(user);
	}

	render() {
		const { errors } = this.state;
		
		return (
			<div role="tabpanel" className="tab-pane" id="login">
	    	<form onSubmit={this.onFormSubmit} className="form">

	    		<FormInputField
	    			label="email"
	    			name="email"
	    			type="email"
	    			labelinfo="(required)"
	    			value={this.state.email}
	    			onChange={this.onFormInputChange}
	    			placeholder="Enter Email..."
	    			error={errors.email}
	    			isDisabled={false}
	    		/>
					
					<FormInputField
	    			label="password"
	    			name="password"
	    			type="password"
	    			labelinfo="(required)"
	    			value={this.state.password}
	    			onChange={this.onFormInputChange}
	    			placeholder="Enter Password..."
	    			error={errors.password}
	    			isDisabled={false}
	    		/><br/>
	        
	        <InputSubmitBtn value="login" btnclass="btn-danger btn-block" /><br/>
	        <a href="#">Forgot Password?</a>
	      </form>
	    </div>
		);
	}
};

Login.propTypes = {
	loginAction: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) =>({
	auth: state.auth
});

export default connect(mapStateToProps, { loginAction })(Login);