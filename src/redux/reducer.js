import { ACTIVATE, DEACTIVATE } from './actions';

const defaultState = false;

export default function(state = defaultState, action) {
  switch (action.type) {
    case ACTIVATE:
      return true;

    case DEACTIVATE:
      return false;

    default:
      return state;
  }
}
