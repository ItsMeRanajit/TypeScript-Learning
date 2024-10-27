import React,{useState} from 'react'
type authUser = {
    name : string,
    email : string
}
const FutureState = () => {
const [user, setUser] = useState<authUser | null>(null);
// const [user, setUser] = useState<authUser>({} as authUser); // we can do this instead of using null. but to with an empty obj and cnsidering it as authUser. this a method of type assertion !IMPORTANT

// const [user, setUser] = useState(null);
const handleLogin = () => {
    setUser({
        name: 'Ranajit',
        email : 'ranajit@email.com'
    })
}
const handleLogout = () => {
    setUser(null);
}
  return (
    <div>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Log Out</button>
    <div>User name is - {user?.name}</div>
    <div>User email is - {user?.email}</div>
    </div>  
    )
}

export default FutureState
// the usestate<> is used when the stateful value is uncertain and can hold multiple type of values
// in this case we need to use usestate<auth | null> or according to need, but it means the stateful variable can hold either auth type value or a null 