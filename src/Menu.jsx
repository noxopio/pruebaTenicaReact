import { Navigate, Route,Routes } from "react-router"
import { HooksApp } from "./App"
import { ScreenUser } from "./ScreenUser"
import { NavBar } from "./components/NavBar"
import { NavLink } from "react-router-dom"

export const Menu = () => {
  return (


    <>



<NavBar></NavBar>



<Routes>

<Route></Route>



<Route path='/' element = {<Navigate to='/' />} ></Route>
<Route path='/login' element = {<HooksApp></HooksApp>} ></Route>
<Route path='/User' element = {<ScreenUser></ScreenUser>} ></Route>



</Routes>
    
    
    </>


    )
}
