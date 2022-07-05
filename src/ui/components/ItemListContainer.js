import { useEffect, useState } from "react"
import ItemCount from "../components/ItemCount"
import { productos } from "../../productos"
import ItemList from "../components/ItemList"
import { useParams } from "react-router-dom"
import { ProductLoader } from "../../ProductLoader"
import { db } from "../../firebase"
import { getDocs, collection } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()



  useEffect(() => {
    const collectionProductos = collection(db, "productos")
  
    const consulta = getDocs(collectionProductos)

    consulta
      .then((resultado)=>{
        

        const productos_mapeados = resultado.docs.map(referencia=>{
          
          const aux = referencia.data()
          aux.id = referencia.id
          return aux
        })
        setItems(productos_mapeados)
        setLoading(false)

      })
      .catch((error)=>{
        console.log(error)
      })
    

  }, [category])



  return (
    <>
      {loading ? <ProductLoader /> : <ItemList items={items} />}
    </>
  )
}

export default ItemListContainer
