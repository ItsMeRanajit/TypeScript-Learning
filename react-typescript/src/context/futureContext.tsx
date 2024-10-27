import React, { Children, createContext, useState } from "react";
 export type auth = {
    name : string,
    email : string
 }

 type usercontexttype = {
    user : auth | null,
    setUser : React.Dispatch<React.SetStateAction<auth | null>> //setting the type of the createcontext. bcz when we were passing {user,setuser} in value it giving error bcz the type of the create context is set to null. so we are typing the createcontext
    //React.Dispatch<React.SetStateAction<auth | null>> this is the type of the setuser setter. we hovered on the setter and it was given
 }
 type Usercontextprop = {
    children : React.ReactNode
 }

 export const Usercontext = createContext<null | usercontexttype>(null);

 export const Usercontenxtprovider = ({children} : Usercontextprop) => {
    const [user, setUser] = useState<auth | null>(null);
    return <Usercontext.Provider value ={{user, setUser}}>{children}</Usercontext.Provider>

 }