const test = (state = 'A', action) => {
  switch (action.type) {
    case 'A':
      return 1
    case 'B':
      return 2
    default:
      return 2
  }
}

export default test