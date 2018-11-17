import { combineReducers } from 'redux'
import children from './children'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  children,
  visibilityFilter
})

export const initialState = {
  children: [
    {id: 1, name: 'Layth', branch: 'London', resident: true},
    {id: 2, name: 'Ziad', branch: 'London', resident: false},
    {id: 3, name: 'Lulwa', branch: 'London', resident: false},
    {id: 4, name: 'Bodel', branch: 'Moscow', resident: true},
    {id: 5, name: 'Tolice', branch: 'Moscow', resident: false}
  ]
}
