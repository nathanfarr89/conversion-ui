import { FETCH_FEETMETERSCONV } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FEETMETERSCONV:
      return [action.payload.data, ...state];
  }
  return state;
}
