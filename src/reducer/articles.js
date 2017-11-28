import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START,
  SUCCESS,
  LOAD_COMMENTS,
} from '../constants';
import {arrToMap} from '../helpers.js'
import {OrderedMap, Map, Record} from 'immutable'


const ArticleRecord = Record({
  text: undefined,
  title: undefined,
  id: undefined,
  loading: false,
  commentsLoading: false,
  commentsLoaded: false,
  comments: [],
})

const ReducerState = new Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
})

const defaultState = new ReducerState()

export default (articlesState = defaultState, action) => {
  const {type, payload, responce, randomId} = action;

  switch (type) {
    case DELETE_ARTICLE: 
      return articlesState.deleteIn(['entities', payload.id])

    case ADD_COMMENT:
      const {articleId} = payload;
      return articlesState.updateIn(['entities', articleId, 'comments'], comments => {
        return comments.concat(payload.responce.id)
      })

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articlesState
        .set('entities', arrToMap(responce, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ALL_ARTICLES + START:
      return articlesState.set('loading', true)

    case LOAD_ARTICLE + START:
      return articlesState.setIn(['entities', payload.id, 'loading'], true)

    case LOAD_ARTICLE + SUCCESS:
      return articlesState.setIn(
        ['entities', payload.id],
        new ArticleRecord(payload.responce)
      )

    case LOAD_COMMENTS + START:
      return articlesState.setIn(['entities', payload.articleId, 'commentsLoading'], true)

    case LOAD_COMMENTS + SUCCESS:
      return articlesState
              .setIn(['entities', payload.articleId, 'commentsLoaded'], true)
              .setIn(['entities', payload.articleId, 'commentsLoading'], false)

  }

  return articlesState;
};
