import { useEffect, useState } from "react"

const ItemCount = ({ stock, initial , onAdd }) => {

  const [contador, setContador] = useState(initial)

  const aumentarContador = () => {
    setContador(contador + 1)
  }

  const bajarContador = () => {
    setContador(contador - 1)
  }

  const confirmarContador = (e) => {

    onAdd(contador)
  
  }

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    console.log("validando...")
  }

  const handleKeyDown = (e) => {
  }

  return (
    <div onClick={(e) => { console.log(e.currentTarget) }}>
      <p>El contador va : {contador}</p>
      <button type="button" class="btn btn-dark mt-3" onClick={aumentarContador}>aumentar</button>
      <button type="button" class="btn btn-danger ms-3 mt-3" onClick={bajarContador}>disminuir</button>
      <button type="button" class="btn btn-success ms-3 mt-3" onClick={confirmarContador}>confirmar</button>
      <a href="http://google.com" onClick={(e) => {
        e.preventDefault()
        console.log("No se ejecuta")
      }} >google</a>

      <form onSubmit={handleSubmit}>
        <input type="text" onKeyDown={handleKeyDown} />
      </form>

    </div>
  )
}
export default ItemCount