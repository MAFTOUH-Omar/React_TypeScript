import React from 'react'

const Parent = ({children}) => {
  return (
    <div>
        <p>This is parent</p>
        {children}
    </div>
    
  )
}

export default Parent