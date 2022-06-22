import {Link,NavLink} from "react-router-dom"

const Nav = ({ inHeader, laClase }) => {

  return (
    <nav className={laClase}>
      <NavLink to="/carrito">carrito</NavLink>
      <NavLink to={inHeader ? "/categoria/rubias" : "http://facebook.com"}>{inHeader ? "Rubias" : "facebook"}</NavLink>
      <NavLink to="/categoria/rojas">{inHeader ? "Rojas" : "instagram"}</NavLink>
      <NavLink to="/categoria/negras">{inHeader ? "negras" : "linkedin"}</NavLink>
    </nav>
  )
}

export default Nav  