import {DELETE_ARTICLE, INCREMENT, CHANGE_SELECTION, DATE_RANGE} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function changeSelected(id) {
  return {
    type: CHANGE_SELECTION,
    payload: { id }
  }
}
