import React from 'react'
import { useRef, useEffect } from 'react'

export const refDom = () => {

    const inputref = useRef<HTMLInputElement>(null!) // typing hte useref 

    useEffect(() => {
        inputref.current.focus()
    },[])
  return (
    <div>refDom
        <input type="text" ref={inputref} />
    </div>
  )
}
