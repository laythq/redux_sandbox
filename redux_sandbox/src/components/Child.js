import React from 'react'

const Child = ({ onClick, name, branch, resident }) => (

    <tr>
      <td>{name}</td>
      <td>{branch}</td>
      <td><span onClick={onClick}>{resident ? 'true' : 'false'}</span></td>
    </tr>
)

export default Child
