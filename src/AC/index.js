import {
  DELETE_ARTICLE,
  INCREMENT,
  CHANGE_SELECTION,
  DATE_RANGE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START,
  SUCCESS,
  FAIL,
  LOAD_COMMENTS,
} from '../constants';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  };
}

export function changeSelected(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  };
}

export function changeDate(dateRange) {
  return {
    type: DATE_RANGE,
    payload: { dateRange }
  };
}

// export function addComment(comment, articleId) {
//   return {
//     type: ADD_COMMENT,
//     payload: { comment, articleId },
//     generateId: true
//   };
// }

// Загрузка всех статей
export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  };
}

// redux-thunk миделвара - если передать ф-ю
// Загрузка статьи 
export function loadArticle(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id }
    })

    setTimeout(() => {
      fetch(`/api/article/${id}`)
        .then( res => res.json())
        .then( responce => dispatch({
          type: LOAD_ARTICLE + SUCCESS,
          payload: { id, responce }
        }))
        .catch( error => dispatch({
          type: LOAD_ARTICLE + FAIL,
          payload: { id, error }
        }))
    }, 1000)
  }
}

// Загрузка комментариев
export function loadComments(articleId) {
  return (dispatch) => {
    dispatch({
      type: LOAD_COMMENTS + START,
      payload: { articleId }
    })

    setTimeout(() => {
      fetch(`/api/comment?article=${articleId}`)
        .then( res => res.json())
        .then( responce => dispatch({
          type: LOAD_COMMENTS + SUCCESS,
          payload: { articleId, responce }
        }))
        .catch( error => dispatch({
          type: LOAD_COMMENTS + FAIL,
          payload: { articleId, error }
        }))
    }, 1000)
  }
}

// add comment
export function addComment(comment, articleId) {
  return dispatch => {
    setTimeout(() => {
      fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify(comment)
      })
        .then( res => res.json())
        .then( responce => ({
          type: ADD_COMMENT,
          payload: { articleId, responce }
        }))
    }, 1000)
  };
}