import { Link } from "react-router-dom";
const CardProducts = ({ product }) => {

  const { name, price, _id, image, stock } = product;


  /**
   * ADD PRODUCT CART
   */
  const handleAdd = () => {
    console.log("....");
  }

  return (
    <div className="col-md-3 col-sm-6  col-xs-6">
      <div className="card-padding">
        <Link className="product-link" to={`/producto/${_id}`}>
          <img src={image} alt={name} className="img-fluid product-img" />
          <div className="product-title">
            {name}
          </div>
          <p className="product-price">
            ${price}
          </p>
        </Link>
        {stock === 0 ?
          (<button className="cart-btn-add">Sin Stock</button>)
          :
          (<button className="cart-btn-add" onClick={handleAdd}>Agregar a mi carro</button>)
        }
      </div>
    </div>
  )
}

export default CardProducts