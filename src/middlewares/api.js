export default store => next => action => {
  const {callAPI} = action
  if (!callAPI) return next(action)

  setTimeout(() => {
    fetch(callAPI)
      .then( res => res.json())
      .then( responce => next({...action, responce}))
  }, 1000)
}