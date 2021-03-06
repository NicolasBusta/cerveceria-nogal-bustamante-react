import Nav from "../navbar/Nav"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
        <h1>Cerveceria Nogal</h1>
      </Link>
      <Nav
        inHeader={true}
        laClase="navbar-header"
      />
    </header>
  )
}

export default Header