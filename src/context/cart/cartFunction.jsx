

/**
 * SEARCH IF EXIST PRODUCT IN CART
 */
export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem._id === productToAdd._id);

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem._id === productToAdd._id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }


    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

/**
 * REMOVE ITEM OF CART
 */
export const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem._id === cartItemToRemove._id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem._id !== cartItemToRemove._id)
    }

    return cartItems.map((cartItem) =>
        cartItem._id === cartItemToRemove._id ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}


/**
 * CLEAR ALL ITEM CART
 */
export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem._id !== cartItemToClear._id)
}