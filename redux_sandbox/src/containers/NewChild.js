import { connect } from 'react-redux'
import { addChild } from '../actions'
import AddChild from '../components/AddChild.js'

// const AddChild = ({ dispatch }) => {
//   let input
//
//   return (
//     <div>
//       <form onSubmit={e => {
//         e.preventDefault()
//         if(!input.value.trim()) {
//           return
//         }
//         dispatch(addChild(input.value))
//         input.value = ''
//       }}>
//         <input ref={ node => input = node } />
//         <button type="submit">
//         Add Child
//         </button>
//       </form>
//     </div>
//   )
// }
//
// export default connect()(AddChild)

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
