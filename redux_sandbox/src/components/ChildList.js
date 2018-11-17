import React from 'react'
import Child from './Child'

const ChildList = ({children, toggleResidency}) => (
  <div>
    <span>Click to Toggle: </span>
    <table>
      <tr>
        <td><b>Name</b></td>
        <td><b>Branch</b></td>
        <td><b>Resident</b></td>
      </tr>
      {children.map(child =>
          <Child
            key={child.id}
            {...child}
            onClick={() => toggleResidency(child.id)}
          />
      )}
    </table>
  </div>
)

export default ChildList
