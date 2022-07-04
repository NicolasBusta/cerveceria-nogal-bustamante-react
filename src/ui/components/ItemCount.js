import { useEffect, useState } from "react"
const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
      stock !== count && setCount(count + 1);
  };

  const substract = () => {
      initial !== count && setCount(count - 1);
  };
  return (
      <div className="count">
          <div className="buttons">
              <button onClick={add}>+</button>
              <p>{count}</p>
              <button onClick={substract}>-</button>
          </div>
          <div className="add-cart">
              <button onClick={() => onAdd(count)}>Add to Cart!</button>
          </div>
      </div>
  );
};

export default ItemCount;

/*const ItemCount = ({ stock, initial , onAdd }) => {

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

export default ItemCount*/