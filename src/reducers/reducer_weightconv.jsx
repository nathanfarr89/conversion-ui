import { FETCH_WEIGHTCONV } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEIGHTCONV:
      return [action.payload.data, ...state];
  }
  return state;
}
