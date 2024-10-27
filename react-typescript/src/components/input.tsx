import React from 'react'
type inputprop = {
    value : string,
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void
}
const input = ({value, handleChange}: inputprop) => { // applied obj destucturing
  return (
    <input type='text' value={value} onChange={handleChange}></input>
  )
}

export default input