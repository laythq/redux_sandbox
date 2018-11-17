const children = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHILD':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          branch: action.branch,
          resident: action.resident
        }
      ]
    case 'CHANGE_BRANCH':
      return state.map(child =>
        (child.id === action.id)
          ? {...child, branch: action.branch}
          : child
      )
    case 'TOGGLE_RESIDENCY':
      return state.map(child =>
        (child.id === action.id)
          ? {...child, resident: !child.resident}
          : child
      )
    default:
      return state
  }
}

export default children
