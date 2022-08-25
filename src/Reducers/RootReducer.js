import { combineReducers } from "redux";
import tours from "./TourReducer";
import users from "./UserReducer";
export default combineReducers({
  tours,
  users,
});
