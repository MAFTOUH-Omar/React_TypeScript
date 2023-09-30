import React from 'react'

const Parent = ({children}) => {
  return (
    <div>
      <h1>Parent Component</h1>
      {children}
    </div>
  )
}

export default Parent