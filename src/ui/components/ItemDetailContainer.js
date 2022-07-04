import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../components/ItemDetail"
import { productos } from "../../productos"
import { SkeletonCard } from "../../ProductLoader"
import CartWidget from "../components/CartWidget"

const ItemDetailContainer = () => {


  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {

    setLoading(true)



    new Promise((res, rej) => {
      setTimeout(() => {
        res(productos.find(productos => productos.id == id))
      }, 2000)
    })
      .then(respuesta => {
        setLoading(false)
        setItem(respuesta)
      })

  },[])


  return (
    <>
      {loading? <SkeletonCard/> : <ItemDetail item={item} />}
      
      
    </>
  )
}
export default ItemDetailContainer