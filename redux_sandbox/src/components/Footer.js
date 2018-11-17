import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL} >
    All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_RESIDENTS} >
    Residents
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_NONRESIDENTS} >
    Non-Residents
    </FilterLink>
  </div>
)

export default Footer
