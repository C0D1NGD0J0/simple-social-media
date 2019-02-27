const User = require('../Models/User');
const Post = require('../Models/Post');
const validate = require("../Util/validations");

const postCntrl = {
	index: (req, res, next) =>{
		const errors = {};

		Post.find({}).sort({date: -1}).then((posts) =>{
			return res.status(200).json(posts);
		}).catch((err) =>{
			errors.msg = err.message;
			return res.status(404).json(errors);
		});
	},

	create: (req, res, next) =>{
		const { errors, isValid } = validate.newpost(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};

		const newpost = new Post({
			text: req.body.text,
			title: req.body.title,
			tags: req.body.tags,
			author: req.user.id
		});
		
		newpost.save()
			.then((post) => res.status(200).json(post))
			.catch((err) => res.status(404).json(err));
	},

	show: async (req, res, next) =>{
		const errors = {};
		const { postId } = req.params;

		try{
			const post = await Post.findById(postId);
			errors.msg = "Post not found.";
			
			if(!post) return res.status(404).json(errors);
			return res.status(200).json(post);
		} catch(err){
			return res.status(400).json(err);
		};
	},

	update: async (req, res, next) =>{
		const { postId } = req.params;
		const updatedPost = {};
		const errors = {};
		
		if(req.body.title) updatedPost.title = req.body.title;
		if(req.body.text) updatedPost.text = req.body.text;
		if(req.body.tags) updatedPost.tags = req.body.tags;

		try {
			const post = await Post.findById(postId).exec();
			if(post.author._id.equals(req.user.id)){
				Post.findOneAndUpdate({_id: postId}, {$set: updatedPost}, {new: true}).then((post) =>{
					return res.json(post);
				}).catch((err) => res.status(404).json(err));
			} else {
				errors.msg = "You are not permitted to perform this action.";
				return res.status(401).json(errors);
			};
		} catch(err) {
			console.log(err)
			return res.status(404).json(err);
		}
	},

	delete: async (req, res, next) =>{
		const errors = {};
		const { postId } = req.body;
		const post = await Post.findById(postId).exec();
		
		if(!post) return res.status(404).json("Post not found");
		if(post.author._id.equals(req.user.id)){
			Post.findOneAndRemove({_id: postId}).then((post) =>{
				return res.json(post);
			}).catch((err) => res.status(404).json(err));
		} else {
			errors.msg = "You are not permitted to perform this action.";
			res.status(401).json(errors);
		}
	}
};

module.exports = postCntrl;