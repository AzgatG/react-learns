import {normalizedComments as defaultComments} from '../fixtures';
import {ADD_COMMENT} from '../constants';
import {arrToMap} from '../helpers'


export default (commentsState = arrToMap(defaultComments), action) => {
  const {type, payload, randomId} = action;
  
  switch (type) {
    case ADD_COMMENT:
      const comment = {...payload.comment, id: randomId};
      return {...commentsState, [randomId]: comment}
  }

  return commentsState;
};