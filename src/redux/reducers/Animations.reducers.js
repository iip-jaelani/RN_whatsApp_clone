import {ANIMATED_HEADER} from '../constants';

const initialState = {
  animationsEvent: {animationsEvent: 0},
};

export const Animations = (state = initialState, action) => {
  switch (action.type) {
    case `${ANIMATED_HEADER}`:
      return {
        ...state,
        animationsEvent: action.payload,
      }; ////
    default:
      return state;
  }
};
