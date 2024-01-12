const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "REGISTER/LOGIN":
            localStorage.setItem("token", payload) // Bearer header.payload.firma
            return {
                ...state,
                authStatus: true,
            }
        case "USER_UPDATE":
            return {
                ...state,
                authStatus: true,
                updateStatus: true
            }
        case "USER_DELETE":
            return {
                ...state,
                authStatus: false
            }
        case "LOGIN_ERROR":
            return {
                ...state,
                authStatus: false
            }
        case "INFO_USER":
            return {
                ...state,
                infoUser: payload,
                authStatus: true,
                infoStatus: true
            }
        case "SIGN_OUT":
            localStorage.removeItem("token")
            return {
                ...state,
                infoUser: [],
                authStatus: false,
                infoStatus:false
            }
        default:
            return state;
    }
}

export default userReducer;