import { connect } from 'react-redux'
import { addChild } from '../actions'
import AddChild from '../components/AddChild.js'


const mapStateToProps = state => ({
  ...state.children
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, branch, resident) => dispatch(addChild(name, branch, resident))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddChild)
