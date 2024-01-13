import { Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";
import { useContext } from "react";
import CheckoutItem from "../../components/checkout/CheckoutItem";
import Paypal from "../../components/paypal/Paypal";


const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link className="product-link" to={"/"}>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-5">
                                <h5>Producto</h5>
                            </div>
                            <div className="col-md-5">
                                <h5>Detalle</h5>
                            </div>
                            <div className="col-md-2">
                                <h5> Opciones</h5>
                            </div>
                        </div>

                        {cartItems ?
                            (cartItems.map((cartItem) => (
                                <CheckoutItem key={cartItem._id} cartItem={cartItem}></CheckoutItem>
                            ))
                            ) :
                            <div className="col-md-12">Carrito Vacio</div>
                        }

                    </div>
                    <div className="col-md-4">
                        <h5>Resumen de compra</h5>
                        <div className="checkout-total">Total: ${cartTotal}</div>
                        <br/><br/><br/>
                            {cartItems.length ? <Paypal /> : null}
                        </div>
                        </div>







                    </div>
                </>
                );
};

                export default Checkout;