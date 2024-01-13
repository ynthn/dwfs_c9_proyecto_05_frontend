import CartContext from '../../context/cart/CartContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './CartBar.css'
import CartItem from './CartItem';

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
                <CartItem key={cartItem._id} cartItem={cartItem}></CartItem>
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