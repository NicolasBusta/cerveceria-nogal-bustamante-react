import ItemCount from "../components/ItemCount"
import { useState } from "react"
const ItemDetail = ({ item }) => {

  const [cant, setCant] = useState(true)

  const onAdd = (cantidadSeleccionada) => {
    console.log("Desde Item Detail : " + cantidadSeleccionada)
    
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <img className="detail-image" src={item.image} alt="thumbnail" />
      <p>{item.description}</p>
      <p>Precio : ${item.price}</p>
      <ItemCount initial={1} onAdd={onAdd} stock={5}/>
      <button type="button" class="btn btn-success ms-3 mt-3">terminar mi compra</button>
    </div>
  )
}
export default ItemDetail