import CartContext from '../../context/cart/CartContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './CartBar.css'

const CartBar = () => {
  const navigate = useNavigate()
  const { setIsCartOpen, cartItems, clearItemToCheckout } = useContext(CartContext);

  /**
   * CLOSE CARTBAR
   */
  const handleClose = () => {
    setIsCartOpen(false);
  }

  /**
   * GO TO PAGE CHECKOUT
   */
  const goToCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  }

  /**
 * GO TO PAGE CHECKOUT
 */
  const clearCart = () => {
    clearItemToCheckout();
  }


  return (
    <>
      <div className="cart-bar-box">
        <div className="cart-bar-items">
          <div className='cart-bar-header'>
            <div className='cart-bar-header-title'>Mi Carrito</div>
            <button className='cart-bar-closed' onClick={handleClose}><i className="bi bi-x-octagon"></i></button>
          </div>
          <div className='cart-bar-content'>
            {cartItems ?
              (cartItems.map((cartItem) => (
                <div key={cartItem._id} className='cart-bar-content-row'>
                  <div className="cart-bar-content-detail-1">
                    <img className='cart-bar-content-img' src={cartItem.image} alt={cartItem.name} />
                  </div>
                  <div className="cart-bar-content-detail-2">
                    <div className="cart-bar-content-info">{cartItem.name}</div>
                    <div className="cart-bar-content-info">Cantidad: {cartItem.quantity}</div>
                    <div className="cart-bar-content-info">Precio: {cartItem.price}</div>
                    <div className="cart-bar-content-info">Total: {cartItem.quantity * cartItem.price}</div>
                  </div>
                </div>
              ))
              ) :
              <span className="empty-message">Carrito Vacio</span>
            }
          </div>
          <div className='cart-bar-footer'>
            <button className='cart-bar-checkout' onClick={goToCheckout}>Checkout</button>
            <button className='cart-bar-clear' onClick={clearCart}>Vaciar Carrito</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartBar