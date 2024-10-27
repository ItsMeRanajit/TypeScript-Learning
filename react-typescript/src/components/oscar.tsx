import React from 'react'
type comp = {
    children : React.ReactNode
}
const oscar = (props : comp) => {

  return (
    <div>{props.children }</div>
  )
}

export default oscar