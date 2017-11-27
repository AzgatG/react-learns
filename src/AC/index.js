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

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  };
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  };
}

// redux-thunk миделвара - если передать ф-ю 
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