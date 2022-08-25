import * as api from "../Api/Api";
import { GET_A_TOURS, GET_TOURS } from "../Constants";

export const getTours = () => async (dispatch) => {
  try {
    const { data } = await api.call_getTours();
    if (data.message === "success")
      dispatch({ type: GET_TOURS, payload: data.data });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const get_A_Tour = (id) => async (dispatch) => {
  try {
    const { data } = await api.call_getSingleTour(id);

    if (data.status === "success")
      dispatch({ type: GET_A_TOURS, payload: data.data.data });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const BookTour = (id, body) => async (dispatch) => {
  try {
    const { data } = await api.call_BookTour(id, body);
    console.log(data);
  } catch (error) {
    console.log(error.response.data.message);
  }
};
