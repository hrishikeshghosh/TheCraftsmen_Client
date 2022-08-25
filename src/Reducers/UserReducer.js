/* eslint-disable import/no-anonymous-default-export */
import { AUTHENTICATE, GETACCOUNT, UNAUTHENTICATE } from '../Constants';

export default (state = { userData: null, authStat: false }, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      localStorage.setItem('C-tid', JSON.stringify(action?.payload?.token));
      return {
        ...state,
        authStat: true,
        userData: action?.payload?.data?.user,
      };
    case GETACCOUNT:
      return { ...state, userData: action?.payload };
    case UNAUTHENTICATE:
      localStorage.removeItem('C-tid');
      return { ...state, authStat: false };
    default:
      return state;
  }
};
