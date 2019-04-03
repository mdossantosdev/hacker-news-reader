import { actionTypes } from './action';

const getInitiateState = () => ({
  theme: 'dark',
});

const app = (state = getInitiateState(), { type, payload }) => {
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
