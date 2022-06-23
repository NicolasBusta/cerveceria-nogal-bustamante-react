import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const Carrito = () => {
  return (
    <div>
      <CartWidget/>
      <h1>Carrito</h1>
      <p>productos</p>
      <Link to="/checkout">Proceder con la compra</Link>
    </div>
  )
}
export default Carrito