import React from 'react'
//passing css as props
type styleprop = {
    style : React.CSSProperties //this is for type casting a css property
}
const style = (props:styleprop) => {
  return (
    <div style={props.style}>style</div>
  )
}

export default style