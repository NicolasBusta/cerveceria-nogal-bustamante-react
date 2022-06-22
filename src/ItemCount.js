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
      <button onClick={aumentarContador}>aumentar</button>
      <button onClick={bajarContador}>disminuir</button>
      <button onClick={confirmarContador}>confirmar</button>
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