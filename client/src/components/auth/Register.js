import React, { Component } from 'react';

class Register extends Component {

	render() {
		return (
			<div role="tabpanel" className="tab-pane" id="signup">
	    	<form action="login.html" className="form">
	        <div className="form-group">
	          <label>Username <small>(required)</small></label>
	          <input type="text" className="form-control" placeholder="Enter Username"/>
	        </div>

	        <div className="form-group">
	          <label>Email <small>(required)</small></label>
	          <input type="email" className="form-control" placeholder="Enter Email"/>
	        </div>

	        <div className="form-group">
	          <label>Location <small>(required)</small></label>
	          <input type="text" className="form-control" placeholder="Enter Location"/>
	        </div>

	        <div className="form-group">
	          <label>Birthday <small>(required)</small></label>
	          <input type="date" className="form-control" placeholder="Enter D.o.B"/>
	        </div>

	        <div className="form-group">
	          <label>Password <small>(required)</small></label>
	          <input type="password" className="form-control" placeholder="Password"/>
	        </div>
					<br/>
	        <input type="submit" value="Signup" className="btn btn-danger btn-block"/>
					<br/>
	        <a href="#">Forgot Password?</a>
	      </form>
	    </div>
		);
	}
};

export default Register;