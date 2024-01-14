import CartContext from "./CartContext";
import { useReducer } from "react";
import { addCartItem, removeCartItem, clearCartItem } from "./cartFunction";
import cartReducer from "./cartReducer";
import axiosClient from '../../config/axiosClient';



const CartProvider = ({ children }) => {


    /**
     * INICIALIZE STATE
     */
    const initialState = {
        makeBuyState: false,
        isCartOpen: false,
        cartItems: JSON.parse(localStorage.getItem("cartItems")) == null ? [] : JSON.parse(localStorage.getItem("cartItems")),
        cartCount: (localStorage.getItem("cartCount")) == null ? 0 : (localStorage.getItem("cartCount")),
        cartTotal: (localStorage.getItem("cartTotal")) == null ? 0 : (localStorage.getItem("cartTotal"))
    }


    /**
     * USE REDUCER
     */
    const [{ isCartOpen, cartItems, cartCount, cartTotal, makeBuyState }, dispatch] = useReducer(cartReducer, initialState)


    /**
     * UPDATE CART REDUCER
     */
    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch({
            type: "SET_CART_ITEMS",
            payload: {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal
            }
        })
    }

    /**
     * MAKE BUY BUY CART CURRENT
     */
    const makeBuy = async (name) => {
        const response = await axiosClient.post("/make-buy", { cartItems: cartItems });
        const data = response.data.success;
        console.log(name, data);

        dispatch({
            type: "MAKE_BUY",
            payload: data
        })
    }

    /**
     * ADD ITEM CART
     */
    const addItemToCart = (productToAdd) => {
        console.log(cartItems);
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemReducer(newCartItems)
    }

    /**
     * REMOVE ITEM CART
     */
    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemReducer(newCartItems)
    }

    /**
     * CLEAR CART
     */
    const clearItemToCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear)
        updateCartItemReducer(newCartItems)
    }

    /**
     * CLEAR AND GO CHECKOUT
     */
    const clearItemToCheckout = () => {
        dispatch({
            type: "CLEAR_CHECKOUT"
        })
    }

    /**
     * SET STATE OPEN CART
     */
    const setIsCartOpen = (bool) => {
        dispatch({
            type: "SET_IS_CART_OPEN",
            payload: bool
        })
    }




    return (
        <CartContext.Provider value={{
            addItemToCart,
            removeItemToCart,
            clearItemToCart,
            clearItemToCheckout,
            setIsCartOpen,
            makeBuy,
            isCartOpen,
            cartItems,
            cartCount,
            cartTotal,
            makeBuyState
        }}>{children}</CartContext.Provider>
    )
}

export default CartProvider