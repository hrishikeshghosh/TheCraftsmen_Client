import * as api from "../Api/Api";
import { AUTHENTICATE, GETACCOUNT, UNAUTHENTICATE } from "../Constants";

export const SignUp = (body) => async (dispatch) => {
  try {
    const { data } = await api.call_signup(body);
    console.log(data);
    if (data.status === "success")
      dispatch({ type: AUTHENTICATE, payload: data });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const SignIn = (body) => async (dispatch) => {
  try {
    const { data } = await api.call_signin(body);
    console.log(data);
    if (data.status === "success")
      dispatch({ type: AUTHENTICATE, payload: data });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const SignOut = () => async (dispatch) => {
  try {
    const { data } = await api.call_signOut();
    console.log(data);
    window.location.reload();
    if (data.status === "success")
      dispatch({ type: UNAUTHENTICATE, payload: data });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const GetCurrentUser = () => async (dispatch) => {
  try {
    const { data } = await api.call_currentUser();
    if (data.status === "success")
      dispatch({ type: GETACCOUNT, payload: data?.data?.data });
  } catch (error) {
    console.log(error.response.data.message);
  }
};
