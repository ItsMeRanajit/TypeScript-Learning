import React, { Children, createContext } from "react";
import {theme } from './theme'

type themeProp = {
    children : React.ReactNode
}

export const Themecontext = createContext(theme)

export const ThemeContextProvider = ({children} : themeProp) => {
    return <Themecontext.Provider value = {theme}>{children}</Themecontext.Provider>
}