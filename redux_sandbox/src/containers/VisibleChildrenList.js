import { connect } from 'react-redux'
import { toggleResidency } from '../actions'
import { VisibilityFilters } from '../actions'
import ChildList from '../components/ChildList'

const getVisibleChildren = (children, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return children
    case VisibilityFilters.SHOW_RESIDENTS:
      return children.filter(c => c.resident)
    case VisibilityFilters.SHOW_NONRESIDENTS:
      return children.filter(c => !c.resident)
    default:
      return children
  }
}

const mapStateToProps = state => ({
  children: getVisibleChildren(state.children, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleResidency: id => dispatch(toggleResidency(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildList)
