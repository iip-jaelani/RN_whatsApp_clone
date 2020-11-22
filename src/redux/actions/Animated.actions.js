import {ANIMATED_HEADER} from '../constants';

export const HeaderAnimated = (e) => {
  return {
    type: ANIMATED_HEADER,
    payload: e,
  };
};
