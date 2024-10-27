import React from 'react'

// type statusProp = {
//     status : string  
// }

type statusProp = {
    status : 'loading' | 'success' | 'error'
}
//user can give only one input out of these 3. so it reduces the chances of exception
let msg : string = 'hello'
const status = (prop : statusProp) => {
    if(prop.status === 'success')
        msg = 'success'
    else if(prop.status === 'loading')
        msg = 'loading'
    else if(prop.status === 'error')
        msg = 'error'
  return (
    <div>status - {msg} </div>
  )
}

export default status