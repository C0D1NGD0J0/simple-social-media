"use strict";
const Validator = require("validator");

function isEmpty(value){
	return(
		value === "undefined" || 
		value === null || 
		(typeof value === "object" && Object.keys(value).length === 0) || 
		(typeof value === "string" && value.trim().length === 0)
	);
};

const validate = {
	registration: (data) =>{
		let errors = {};
		
		data.username = !isEmpty(data.username) ? data.username : "";
		data.email = !isEmpty(data.email) ? data.email : "";
		data.location = !isEmpty(data.location) ? data.location : "";
		data.birthday = !isEmpty(data.birthday) ? data.birthday : "";
		data.password = !isEmpty(data.password) ? data.password : "";
		data.password2 = !isEmpty(data.password2) ? data.password2 : "";

		if(!Validator.isLength(data.username, { min: 5, max: 20 })){
			errors.username = `${data.username} must be between 5 and 20 characters.`;
		};
		
		if(Validator.isEmpty(data.username)){
			errors.username = "Username field is required.";
		};

		if(Validator.isEmpty(data.birthday)){
			errors.birthday = "Birthday field is required.";
		};

		if(Validator.isEmpty(data.location)){
			errors.location = "Location field is required.";
		};

		if(Validator.isEmpty(data.email)){
			errors.email = "Email field is required.";
		};

		if(!Validator.isEmail(data.email)){
			errors.email = "Email is invalid.";
		};

		if(Validator.isEmpty(data.password)){
			errors.password = "Password field is required.";
		};

		if(!Validator.isLength(data.password, {min: 6, max: 15})){
			errors.password = "Password must be at least 6 characters long.";
		};

		if(Validator.isEmpty(data.password2)){
			errors.password2 = "Confirm Password field is required.";
		};

		if(!Validator.equals(data.password, data.password2)){
			errors.password2 = "Passwords must match.";
		}

		return {errors, isValid: isEmpty(errors)};
	},

	login: (data) =>{
		let errors = {};
		
		data.email = !isEmpty(data.email) ? data.email : "";
		data.password = !isEmpty(data.password) ? data.password : "";
		
		if(Validator.isEmpty(data.email)){
			errors.email = "Email field is required.";
		};

		if(!Validator.isEmail(data.email)){
			errors.email = "Email is invalid.";
		};

		if(Validator.isEmpty(data.password)){
			errors.password = "Password field is required.";
		};

		return {errors, isValid: isEmpty(errors)};
	},

	resetEmail: (data) =>{
		const errors = {};

		if(!Validator.isEmail(data.email)){
			errors.email = "Email format is invalid.";
		};

		if(isEmpty(data.email)){
			errors.email = "Email needs to be provided.";
		};

		return {errors, isValid: isEmpty(errors)};
	},

	passwordReset: (data) =>{
		const errors = {};

		data.password = !isEmpty(data.password) ? data.password : "";
		data.password2 = !isEmpty(data.password2) ? data.password2 : "";

		if(Validator.isEmpty(data.password)){
			errors.password = "Password field is required";
		}

		if(!Validator.isLength(data.password, {min: 6, max: 15})){
			errors.password = "Password must be at least 6 characters";
		}

		if(Validator.isEmpty(data.password2)){
			errors.password2 = "Confirm password field is required";
		}

		if(!Validator.equals(data.password, data.password2)){
			errors.password2 = "Passwords must match.";
		}

		return {errors, isValid: isEmpty(errors)}
	},
	
	updateuser: (data) =>{
		let errors = {};
		
		data.username = !isEmpty(data.username) ? data.username : "";
		data.email = !isEmpty(data.email) ? data.email : "";
		data.password = !isEmpty(data.password) ? data.password : "";

		if(!Validator.isLength(data.username, { min: 5, max: 20 })){
			errors.username = `${data.username} must be between 5 and 20 characters.`;
		};
		
		if(Validator.isEmpty(data.username)){
			errors.username = "Username field is required.";
		};

		if(Validator.isEmpty(data.email)){
			errors.email = "Email field is required.";
		};

		if(!Validator.isEmail(data.email)){
			errors.email = "Email is invalid.";
		};

		if(Validator.isEmpty(data.password)){
			errors.password = "Password field is required.";
		};

		if(!Validator.isLength(data.password, {min: 6, max: 15})){
			errors.password = "Password must be at least 6 characters long.";
		};

		return {errors, isValid: isEmpty(errors)};
	},

	newpost: (data) =>{
		const errors = {};

		data.title = !isEmpty(data.title) ? data.title : "";
		data.text = !isEmpty(data.text) ? data.text : "";

		if(Validator.isEmpty(data.title)){
			errors.title = "Post title is required.";
		};

		if(!Validator.isLength(data.title, {min: 5, max: 100})){
			errors.title = "Title should be between 5 and 100 characters.";
		};
		
		if(Validator.isEmpty(data.text)){
			errors.text = "Post body is required.";
		};

		if(!Validator.isLength(data.text, {min: 2, max: 200})){
			errors.text = "Post body should be between 2 and 200 characters.";
		};

		if(Validator.isEmpty(data.tags)){
			errors.tags = "Post tags needs to be provided.";
		};

		return { errors, isValid: isEmpty(errors) };
	},

	newcomment: (data) =>{
		const errors = {};

		data.comment = isEmpty(data.comment) ? "" : data.comment;

		if(Validator.isEmpty(data.comment)){
			errors.comment = "Comment needs to be provided.";
		}

		if(!Validator.isLength(data.comment, {min: 5, max: 200})){
			errors.comment = "Exceeded comment characters length of 200";
		}

		return {errors, isValid: isEmpty(errors)};
	}
}

module.exports = validate;