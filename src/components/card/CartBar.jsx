import CartContext from '../../context/cart/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import './CartBar.css'

const CartBar = () => {
    const navigate = useNavigate()
    const {cartItems} = useContext(CartContext)


    const goToCheckout = () => {
        navigate("/checkout")
    }

  return (
    <>
        <div className="cart-bar-box">
            <div className="cart-bar-items">
                
            
                 
            </div>
            <button onClick={goToCheckout}>Checkout</button> 
        </div>
    </>
  )
}

export default CartBar