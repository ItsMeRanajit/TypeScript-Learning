import React from "react";
import Login from './passCompLogin'
import { profileprop } from "./passCompComp";
type  compProp = {
    isLogged : boolean,
    component : React.ComponentType<profileprop> // this is how to type a component to passs 
    //<profileprop> is imported, and this means only that type of component can be passed, not any other
}

const passComponent = ({isLogged, component : Component} : compProp) => {
    if(isLogged)    return <Component name = {'ranajit'}/>
    else return <Login/>
}
export default passComponent