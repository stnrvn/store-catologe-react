const logger = store => next => action => {
  console.log('dispatch action', action, store.getState());

  next(action)

  console.log('setelah dispatch action', store.getState());
}

export default logger