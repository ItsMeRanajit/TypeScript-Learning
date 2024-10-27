import { useContext } from "react"
import {Themecontext } from './themeContext'

export const Box = () => {
    const theme = useContext(Themecontext)
    return <div style={{backgroundColor : theme.primary.main , color : theme.primary.text}}>theme context</div>
}