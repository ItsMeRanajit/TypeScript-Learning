import React from 'react'

type personList = {
    arr : {
        first : String,
        last : String
    }[]
}
const personList = (props : personList) => {
  return (
    <div>{props.arr.map(name =>{ return(
        <div>
        <div>{name.first}</div>
        <div>{name.last}</div>
        </div>
)})}</div>
  )
}

export default personList

// thsi is how to send an array