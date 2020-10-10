import { SET_CURRENT_USER } from "../types";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwtDecode from "jwt-decode";
import sweetAlert from "sweetalert";

//Register User
export const registerUser = (userData, history) => (dispatch) => {};

//FB login Route
// export const fbLogin = res => dispatch =>{

//     //get token form response
//     const { accessToken } = res;

//     //Save to local storage
//     localStorage.setItem("jwtToken", "Bearer "+accessToken);

//     //decode token to get data
//     const decoded = jwtDecode(accessToken);
//     //set current user
//     dispatch(setCurrentUser(decoded));
//     sweetAlert({
//       title: "You are now logged in to Sweet Panda !",
//       icon: "success"
//     });
// }

//Login & get Token
export const loginUser = (userData) => (dispatch) => {};

//Set Current user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//Log user out
export const logoutUser = () => (dispatch) => {};
