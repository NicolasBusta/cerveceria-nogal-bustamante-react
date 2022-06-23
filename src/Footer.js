import Nav from "./Nav"

const Footer = () => {

  return (
    <footer className="footer navbar navbar-expand-lg bg-warning">
      <div class="container-fluid">
      <p>Copyright &copy; Cerveza Nogal</p>
      <Nav 
      inHeader={false} 
      laClase="navbar-footer"
      />
      </div>
    </footer>
  )
  
}

export default Footer
