import React, { Component } from 'react';
import Header from "../../layouts/pageHeader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import  { Link } from "react-router-dom";
import Moment from 'react-moment';
import Sidebar from "../../layouts/Sidebar/";
import SidebarUser from "../../layouts/Sidebar/userDetails";
import SidebarPostPhotos from "../../layouts/Sidebar/postPhotos";
import { getCurrentPost } from "../../../Actions/postAction";

class Post extends Component {
	constructor(props){
		super(props);
		this.state ={
			errors: {}
		};
	}

	componentDidMount(){
		const { postId } = this.props.match.params;
		if(postId){
			this.props.getCurrentPost(postId);
		};
	}

	render() {
		const { show: post } = this.props.posts;
		
		return (
			<main id="content_wrapper" className="bg-img_post">
				<Header title={post.title} />
				<section id="post" className="post">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-2">
								<Sidebar user={post.author} post={post.photos}>
									<SidebarUser />
									<SidebarPostPhotos />
								</Sidebar>
							</div>

							<div className="col-sm-8">
								<div className="post-content">
									<div className="panel panel-default">
										<div className="panel-body">
											<div className="post-content__description">
												<p className="clearfix post-meta" style={{margin: "0 0 2rem"}}>
													<small className="pull-right text-muted">
														<i className="fa fa-clock-o"></i>  
														<Moment format="H:m:s">{post.createdAt}</Moment>
													</small>
													<small className="pull-left text-muted">
														<i className="fa fa-cogs"></i> Category
													</small>
												</p>
												<p>{post.body}</p><hr/>

												<ul className="list-inline post-actions pull-right">
													<li><a href="#"><i className="fa fa-commenting-o"></i></a><span className="badge">14</span></li>
													<li><a href="#"><i className="fa fa-thumbs-o-up"></i></a><span className="badge">{post.likes && post.likes.count}</span></li>
													<li><a href="#"><i className="fa fa-share-alt"></i> Share</a></li>
												</ul>

												<div className="posts-meta pull-left">
													<ul className="list-inline post-actions">
														<li>
															<i className="fa fa-user-o"></i>
															{post.author && 
															<Link to={`/${post.author.username}/profile`}> {post.author.username}</Link>}
														</li>
														<li>
															<i className="fa fa-calendar-o"></i> 
															<Moment format="DD/MM/YYYY">{post.createdAt}</Moment>
														</li>
													</ul>
												</div>
											</div>
										</div>	
									</div>

									<div className="post_content-form">
										<div className="panel panel-default">
											<div className="panel-heading">
												<h3 className="panel-title">Leave your comments below..</h3>
											</div>

											<div className="panel-body">
												<form action="#" className="form">
													<div className="form-group">
														<textarea name="description" className="form-control" rows="1"></textarea>
													</div>

													<div className="pull-right">
														<div className="btn-group">
														  <button type="button" className="btn btn-default"><i className="fa fa-camera-retro"></i> Image</button>
														  <input type="submit" value="Submit" className="btn btn-danger"/>
														</div>
													</div>
												</form><hr/>

												<div className="post-comments">
													<div className="comment">
														<div className="row">
															<div className="col-sm-2">
																<a href="#" className="text-center comment_avatar thumbnail">
																	<img src="./dist/img/user.png" className="img-circle" alt=""/>
																	<span>John Major</span>
																</a>
															</div>

															<div className="col-sm-10">
																<div className="comment_bubble clearfix">
																	<p className="clearfix post-meta" style={{margin: "0 0 1rem"}}>
																		<small className="pull-left text-muted">11:45am</small>
																		<small className="pull-right text-muted">12/2/2019</small>
																	</p>

																	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima harum fugiat laudantium fugit, optio qui illum ut, vel illo. Nesciunt recusandae ex nemo libero quia.</p>

																	<ul className="list-inline post-actions pull-right">
																		<li><a href="#"><i className="fa fa-commenting-o"></i></a><span className="badge">14</span></li>
																		<li><a href="#"><i className="fa fa-thumbs-o-up"></i></a><span className="badge">3</span></li>
																		<li><a href="#"><i className="fa fa-thumbs-o-down"></i></a><span className="badge">6</span></li>
																	</ul>
																</div>
															</div>
														</div>
													</div>

													<div className="comment">
														<div className="row">
															<div className="col-sm-2">
																<a href="#" className="text-center comment_avatar thumbnail">
																	<img src="./dist/img/user.png" className="img-circle" alt=""/>
																	<span>John Major</span>
																</a>
															</div>

															<div className="col-sm-10">
																<div className="comment_bubble clearfix">
																	<p className="clearfix post-meta" style={{margin: "0 0 1rem"}}>
																		<small className="pull-left text-muted">11:45am</small>
																		<small className="pull-right text-muted">12/2/2019</small>
																	</p>

																	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima harum fugiat laudantium fugit, optio qui illum ut, vel illo. Nesciunt recusandae ex nemo libero quia.</p>

																	<ul className="list-inline post-actions pull-right">
																		<li><a href="#"><i className="fa fa-commenting-o"></i></a><span className="badge">14</span></li>
																		<li><a href="#"><i className="fa fa-thumbs-o-up"></i></a><span className="badge">3</span></li>
																		<li><a href="#"><i className="fa fa-thumbs-o-down"></i></a><span className="badge">6</span></li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-2">
								<div className="sidebar">
									<div className="sidebar_box">
										<div className="post_followers">
											<h4 className="text-center">Joined:</h4><hr/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
};

const mapStateToProps = (state) =>({
	posts: state.posts
});

const mapDispatchToProps = {
	getCurrentPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);