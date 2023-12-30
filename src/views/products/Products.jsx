import { useContext, useEffect } from "react";
import ProductContext from "../../context/products/ProductContext";
import CardProducts from "../../components/cardProducts/CardProducts";



const Products = () => {

  const { getProducts, products } = useContext(ProductContext)

  useEffect(() => {
    const axiosProducts = async () => {
      await getProducts();
    }
    axiosProducts()
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
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