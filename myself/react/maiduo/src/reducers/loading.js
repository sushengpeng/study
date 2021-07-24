const loading = (state = 'SHOW', action) => {
  switch (action.type) {
    case 'SHOW':
      return true
    case 'HIDE':
      return false
    default:
      return false
  }
}

export default loading