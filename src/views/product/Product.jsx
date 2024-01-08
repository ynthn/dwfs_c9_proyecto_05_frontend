import ProductContext from "../../context/products/ProductContext";
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";

const Product = () => {
  const { id } = useParams();

  const { getProductById, product } = useContext(ProductContext);
  const { addItemToCart, cartCount } = useContext(CartContext)

  //explicar
  const handleAdd = () => { if (cartCount < stock) addItemToCart(product[0]) }

  const { name, stock, price, image, sku } = product[0];


  useEffect(() => {
    const fetchProduct = async () => {
      await getProductById(id);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link className="product-link" to={"/"}>Home</Link></li>
                <li className="breadcrumb-item"><Link className="product-link" to={"/productos/"}>Productos</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{name}</li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6">
            <img src={image} alt={name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="title-page">{name}</h2>
            <div className="product-title">
              {name}
            </div>
            <p className="product-price">
              ${price}
            </p>
            <p className="product-stock">
              <b>Stock</b>: {stock}
            </p>
            {stock === 0 ? (
              <h4 className="text-red-800 no-underline">Sin Stock</h4>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAdd}
              >
                Añadir
              </button>
            )}
          </div>

        </div>
      </div>
    </>
  );
};



export default Product;