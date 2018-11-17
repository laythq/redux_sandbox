export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_RESIDENTS: 'SHOW_RESIDENTS',
  SHOW_NONRESIDENTS: 'SHOW_NONRESIDENTS'
}

let nextChildId = 5

export const toggleResidency = id => ({
  type: 'TOGGLE_RESIDENCY',
  id
})

export const addChild = name, branch, resident => ({
  type: 'ADD_CHILD',
  id: nextChildId++,
  name,
  branch,
  resident
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
