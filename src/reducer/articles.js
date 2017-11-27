import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants';
import {arrToMap} from '../helpers.js'
import {Map, Record} from 'immutable'


const ArticleRecord = Record({
  text: undefined,
  title: undefined,
  id: undefined,
  comments: [],
})

const defaultState = new Map({})

export default (articlesState = defaultState, action) => {
  const {type, payload, responce, randomId} = action;

  switch (type) {
    case DELETE_ARTICLE: 
      return articlesState.delete(payload.id)

    case ADD_COMMENT:
      const {articleId} = payload;
      return articlesState.updateIn([articleId, 'comments'], comments => {
        return comments.concat(randomId)
      })

    case LOAD_ALL_ARTICLES:
      return arrToMap(responce, ArticleRecord)

  }

  return articlesState;
};
