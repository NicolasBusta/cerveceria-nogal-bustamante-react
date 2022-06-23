import {Link,NavLink} from "react-router-dom"
import CartWidget from "./CartWidget"

const Nav = ({ inHeader, laClase }) => {

  return (
    <nav className={laClase} class="nav">
      <CartWidget/>
      <NavLink class="nav-link link-dark" to="/carrito">Carrito</NavLink>
      <NavLink class="nav-link link-dark" to={inHeader ? "/categoria/rubias" : "http://facebook.com"}>{inHeader ? "Rubias" : "facebook"}</NavLink>
      <NavLink class="nav-link link-dark" to="/categoria/rojas">{inHeader ? "Rojas" : "instagram"}</NavLink>
      <NavLink class="nav-link link-dark" to="/categoria/negras">{inHeader ? "Negras" : "linkedin"}</NavLink>
    </nav>
  )
}

export default Nav  
/*nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>*/