import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';




const CheckoutItem = ({ cartItem }) => {
    const { removeItemToCart } = useContext(CartContext);


    /**
     * CLOSE CARTBAR
     */
    const handleRemove = () => {
        removeItemToCart(cartItem);
    }


    return (
        <>
            <div key={cartItem._id} className='row'>
                <div className="col-md-5">
                    <img className='cart-bar-content-img' src={cartItem.image} alt={cartItem.name} />
                </div>
                <div className="col-md-5">
                    <div className="cart-bar-content-info">{cartItem.name}</div>
                    <div className="cart-bar-content-info">Cantidad: {cartItem.quantity}</div>
                    <div className="cart-bar-content-info">Precio: ${cartItem.price}</div>
                    <div className="cart-bar-content-info">Total: ${cartItem.quantity * cartItem.price}</div>
                </div>
                <div className="col-md-2">
                    <button onClick={handleRemove} className="cart-bar-content-delete">Borrar</button>
                </div>

            </div>
        </>
    )
}

export default CheckoutItem