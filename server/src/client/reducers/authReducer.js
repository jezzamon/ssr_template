import { FETCH_CURRENT_USER } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;  // if data is undefined return false (user not defined)
    default:
      return state;
  }
};
