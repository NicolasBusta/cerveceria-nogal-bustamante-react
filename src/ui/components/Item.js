import {Link} from "react-router-dom"

const Item = ({item}) => {
  return (
    <article className="item border border-dark">
      <h4>{item.title}</h4>
      <img src={item.image} alt="thumbnail" />
      <p>Precio : ${item.price}</p>
      <Link type="button" class="btn btn-info" to={`/item/${item.id}`}>ver detalle</Link>
    </article>
  )
}
export default Item