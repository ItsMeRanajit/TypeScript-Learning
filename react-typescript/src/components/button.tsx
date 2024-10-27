import React from 'react'

type btnProp = {
    handleClick : (event : React.MouseEvent<HTMLButtonElement>, id : number) => void 
    // giving a type of clickevent. and for each click event it return nothing as it returns void. but we can return some value if we wanted
    //if we use event as a parameter, we need to define its type. as here its a mouseevet to thats how we should write it. if we want to be more specific we can say its on a html button element
}
const button = (props : btnProp) => {
  return (
 <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
 // as in the type we have event and id so we need to mention them in our props. and id was a number so for the id we passed a number 
  )
}

export default button