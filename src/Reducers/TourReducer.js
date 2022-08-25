/* eslint-disable import/no-anonymous-default-export */
import { GET_A_TOURS, GET_TOURS } from '../Constants';

export default (state = { tourList: [], tourDetails: null }, action) => {
  switch (action.type) {
    case GET_TOURS:
      return { ...state, tourList: action?.payload };
    case GET_A_TOURS:
      return { ...state, tourDetails: action?.payload };
    default:
      return state;
  }
};
