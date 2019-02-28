"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	author:{
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	title: {
		type: String,
		required: [true, "Title is required"],
		minlength: 4,
		maxlength: 100
	},
	text: {
		type: String,
		required: [true, "Post body is required"],
		minlength: 2,
		maxlength: 200
	},
	likes: {
		count: {type: Number, default: 0},
		users: [{type: Schema.Types.ObjectId, ref: 'User'}]
	},
	tags: [{type: String, required: true}],
	photos: [{String}],
	comments:[{type: Schema.Types.ObjectId, ref: "Comment"}],
	allowComments: {type: Boolean, default: false},
	result: {type: String},
	type:{type: String, default: 'article', lowercase: true} 
}, {timestamps: true});

const post = mongoose.model("Post", PostSchema);

module.exports = post;