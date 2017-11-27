import {OrderedMap, Map, Record} from 'immutable'

// import {normalizedComments as defaultComments} from '../fixtures';
import {ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS} from '../constants';
import {arrToMap} from '../helpers'


const CommentRecord = Record({
  text: undefined,
  user: undefined,
  id: undefined,
})

const ReducerState = new Record({
  entities: new OrderedMap({})
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
  const {type, payload, responce, randomId} = action;
  
  switch (type) {
    case ADD_COMMENT:
      const comment = {...payload.comment, id: randomId};
      return {...commentsState, [randomId]: comment}

    case LOAD_COMMENTS + SUCCESS:
      return commentsState.update('entities', entities => entities.merge(arrToMap(payload.responce, CommentRecord)))
  }

  return commentsState;
};