import { FETCH_MEASURECONV } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEASURECONV:
      return [action.payload.data, ...state];
  }
  return state;
}
