// for side effects
export default store => next => action => {
  // console.log('dispatching', action);
  next(action);
}