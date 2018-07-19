import { FETCH_TEMPCONV } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TEMPCONV:
      return [action.payload.data, ...state];
  }
  return state;
}
