import {useState} from 'react'

const LoggedIn = () => {

    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const handleLoggedIn = () => {
        setIsLoggedIn(true)
        // setIsLoggedIn(0); error
    }
    const handleLoggedOut = () => {
        setIsLoggedIn(false)
    }
  return (
    <div>
        <button onClick={handleLoggedIn}>Login</button>
        <button onClick={handleLoggedOut}>Log Out</button>
        <div>User is - {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  )
}

export default LoggedIn
//here no type casting is done but for the usestate hook the typeing done automatically
//when it initialized with a boolean value it already typed with a boolean, now if we want to assign it with some different type it will throw an error