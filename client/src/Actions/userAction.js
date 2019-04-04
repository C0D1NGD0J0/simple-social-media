import axios from "axios";
import { setAuthenticatedUser } from "./authAction";
import { setLoadingState, clearCurrentUser } from "./utilAction";
import { GET_CURRENT_USER, GET_ERRORS, GET_USER_POSTS, UPDATE_CURRENT_USER } from "./types";

export const getCurrentUserAction = () => (dispatch)=>{
	dispatch(setLoadingState());
	axios.get("/api/users/currentuser").then((res) =>{
		dispatch({
			type: GET_CURRENT_USER,
			payload: res.data
		});
	}).catch((err) =>{
		return dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	})
};

export const updateUserAction = (userdata) => (dispatch) =>{
	axios.put(`/api/users/${userdata.id}`, userdata).then((res) =>{
		return dispatch({
			type: GET_CURRENT_USER,
			payload: res.data
		})
	}).catch((err) =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const deleteUserAccountAction = (userid) => (dispatch) =>{
	axios.delete(`/api/users/${userid}`).then((res) =>{
		dispatch(clearCurrentUser());
		return dispatch(setAuthenticatedUser({}));
	}).catch((err) =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const followUserAction = (followid) => (dispatch) =>{
	axios.put(`/api/users/${followid}/follow`).then((res) =>{
		return dispatch({
			type: UPDATE_CURRENT_USER,
			payload: res.data
		});
	}).catch((err) =>{
		return dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};

export const unFollowUserAction = (followid) => (dispatch) =>{
	axios.put(`/api/users/${followid}/unfollow`).then((res) =>{
		return dispatch({
			type: UPDATE_CURRENT_USER,
			payload: res.data
		});
	}).catch((err) =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	});
};