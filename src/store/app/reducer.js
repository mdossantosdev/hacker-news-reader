import { actionTypes } from './actions';
import { themes } from './utils';

const getInitialState = () => ({
  theme: themes.dark,
});

const app = (state = getInitialState(), { type, payload }) => {
  switch(type) {
    case actionTypes.SET_THEME:
      return {
        ...state,
        ...payload, // { theme: 'value' }
      }
    default:
      return state;
  }
}

export default app;
