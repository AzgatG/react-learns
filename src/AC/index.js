import {
  DELETE_ARTICLE,
  INCREMENT,
  CHANGE_SELECTION,
  DATE_RANGE,
  ADD_COMMENT
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
