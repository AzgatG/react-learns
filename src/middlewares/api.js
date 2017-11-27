import {START, FAIL, SUCCESS} from '../constants'


export default store => next => action => {
  const {callAPI, type, ...rest} = action
  if (!callAPI) return next(action)

  next({
    ...rest, type: type + START
  })

  setTimeout(() => {
    fetch(callAPI)
      .then( res => res.json())
      .then( responce => next({...rest, type: type + SUCCESS, responce}))
      .catch( error => next({...rest, type: type + FAIL, error}))
  }, 1000)
}