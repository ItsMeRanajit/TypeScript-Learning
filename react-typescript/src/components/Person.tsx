import React from 'react'
type person = {
    name: {
        first : String,
        last : String
    }}
const Person = (props : person ) => {
  return (
    <div>{props.name.first}</div>
  )
}

export default Person
//this is how to send an object