import { Link } from "react-router-dom";
const CardProducts = ({ product }) => {

  const { name, price, _id, image } = product;

  return (
    <div className="col-md-3">
      <Link className="product-link" to={`/producto/${_id}`}>
        <img src={image} alt={name} className="img-fluid product-img" />
        <div className="product-title">
          {name}
        </div>
        <p className="product-price">
          ${price}
        </p>
      </Link>
    </div>
  )
}

export default CardProducts