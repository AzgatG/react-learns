import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants';
import {arrToMap} from '../helpers'


export default (articlesState = {}, action) => {
  const {type, payload, responce, randomId} = action;

  switch (type) {
    case DELETE_ARTICLE: 
      const tmpState = {...articlesState}
      delete tmpState[payload.id]
      return tmpState

    case ADD_COMMENT:
      const {articleId} = payload;
      const article = articlesState[articleId];
      ////////////////////////////////////////////////
      // Не работает потому что вложенность большая //
      // articlesState[articleId].comments.push(randomId)
      // return articlesState
      // в комментах работате
      ////////////////////////////////////////////////
      return {
        ...articlesState,
        [articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      }

    case LOAD_ALL_ARTICLES:
      return arrToMap(responce)

  }

  return articlesState;
};
