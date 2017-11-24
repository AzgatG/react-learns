import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants';
import {arrToMap} from '../helpers'


export default (articlesState = arrToMap(defaultArticles), action) => {
  const {type, payload, randomId} = action;

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
  }

  return articlesState;
};
