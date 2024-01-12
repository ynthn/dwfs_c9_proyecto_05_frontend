import { Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";
import { useContext } from "react";
const CardProducts = ({ product }) => {

  const { name, price, _id, image, stock } = product;
  const { addItemToCart, cartCount, cartItems } = useContext(CartContext);


  /**
 * HANDLE ADD PRODUCT
 */
  const handleAdd = () => {
    console.log(product);
    if (cartCount < stock) {
      addItemToCart(product);
    }
    console.log(cartCount);
    console.log(cartItems);
  };




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