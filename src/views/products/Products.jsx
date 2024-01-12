import { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/products/ProductContext";
import CardProducts from "../../components/cardProducts/CardProducts";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/loader";
import UserContext from "../../context/user/UserContext";



const Products = () => {

  const [stateLoading, setStateLoading] = useState(false);
  const { getProducts, products } = useContext(ProductContext)
  const { infoUser, signOut, authStatus, verifyToken,infoStatus } = useContext(UserContext);


  /**
   * LOAD LIST PRODUCTS
   */
  useEffect(() => {
    const axiosProducts = async () => {
      setStateLoading(true);
      await getProducts();

      setStateLoading(false);
    }
    axiosProducts();
    
  }, []);



  /**
   * LOAD DATA NAME USER
   */
  useEffect(() => {
    const getInfoUser = async () => {
      await verifyToken();
    }
    getInfoUser();
  }, []);

  return (
    <>
    <Loader stateLoading={stateLoading} setStateLoading={setStateLoading}></Loader>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link className="product-link" to={"/"}>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Productos</li>
              </ol>
            </nav>
          </div>
          <div className="col-md-12">
            <h2 className="title-page">Nuestros Productos</h2>
          </div>
        </div>

        <div className="row">
          {products.map((product) => (
            <CardProducts key={product._id} product={product} />
          ))}
        </div>


      </div>

    </>
  );
};

export default Products;