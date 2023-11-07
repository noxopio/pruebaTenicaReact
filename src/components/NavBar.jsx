import { NavLink ,Link} from "react-router-dom"

export const NavBar = () => {
  return (

<article className="menu-screen">

<ul  className="nav nav-tabs">
  <li  className="nav-item">
    <Link to='/Menu'  className="nav-link " aria-current="page" >HOME</Link>
  </li>
  <li  className="nav-item">
    <NavLink to='/Login' className="nav-link" >Login</NavLink>
  </li>
  {/* <li  className="nav-item">
    <NavLink to='/User' className="nav-link">User</NavLink>
  </li> */}

</ul>
    
</article>

    )
}
