import { Usercontext } from "./futureContext";
import { useContext } from "react";

export const User = () => {
    const userContext  = useContext(Usercontext)
    const handleLogin = () => {
        if(userContext){
            userContext.setUser({
                name : 'ranajitdas',
                email : "ranajiteamil"
            })
        }
    }
    
    const handleLogout = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }
    
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>user name is {userContext?.user?.name}</div>
            <div>user name is {userContext?.user?.email}</div>
        </div>
    )
}