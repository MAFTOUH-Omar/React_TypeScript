import React from 'react'
import Card from "../../types/type"

const CradList = (props : Card) => {
  return (
    <div>
        <h1>{props.id}</h1>
        <h1>{props.title}</h1>
        <h1>{props.body}</h1>
    </div>  
  )
}

export default CradList