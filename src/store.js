import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./Reducers/RootReducer";

export default createStore(RootReducer, compose(applyMiddleware(thunk)));
