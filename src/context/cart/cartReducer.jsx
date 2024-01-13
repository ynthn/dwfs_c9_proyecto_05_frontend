const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_CART_ITEMS":
            localStorage.setItem("cartCount", JSON.stringify(payload.cartCount));
            localStorage.setItem("cartItems", JSON.stringify(payload.cartItems));
            localStorage.setItem("cartTotal", JSON.stringify(payload.cartTotal));
            return {
                ...state,
                ...payload
            }
        case "SET_IS_CART_OPEN":
            return { ...state, isCartOpen: payload }
        case "CLEAR_CHECKOUT":
            localStorage.setItem("cartCount", 0);
            localStorage.setItem("cartItems", JSON.stringify([]));
            localStorage.setItem("cartTotal", 0);
            return {
                isCartOpen: false,
                cartItems: [],
                cartCount: 0,
                cartTotal: 0
            }
        default:
            throw new Error(`unhandledd type of ${type} in cartReducer`)
    }
}

export default cartReducer;