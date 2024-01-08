import axiosClient from "../../config/axiosClient"
import UserContext from "./UserContext"
import { useReducer } from "react"
import userReducer from "./userReducer"
import { useNavigate } from "react-router-dom"


const UserProvider = ({ children }) => {

    const navigate = useNavigate();

    //initialState
    const initialState = {
        infoUser: [],
        authStatus: false
    }

    //useReducer ---> estados
    const [userState, dispatch] = useReducer(userReducer, initialState)



    /**
     * LOGIN USER
     */
    const loginUser = async (user) => {
        try {
            const userLogin = await axiosClient.post("/login", user)
            const userOn = userLogin.data
            console.log(userOn)
            console.log(userOn.token)

            if (userOn.success) {
                dispatch({
                    type: "REGISTER/LOGIN",
                    payload: userOn.token
                })
            } else {
                dispatch({
                    type: "LOGIN_ERROR"
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    /**
     * REGISTER USER
     */
    const registerUser = async (user) => {
        try {
            const userRegister = await axiosClient.post("/user", user);
            const userOn = userRegister.data;

            console.log(userOn)
            console.log(userOn.token)

            if (userOn.success) {
                dispatch({
                    type: "REGISTER/LOGIN",
                    payload: userOn.token
                })
            }
            console.log(userOn.message)

        } catch (error) {
            console.log(error)
        }
    }



    /**
    * UPDATE USER
    */
    const updateUser = async (user) => {
        try {
            const userUpdate = await axiosClient.put("/user/" + user.id, user);
            const userOn = userUpdate.data;

            console.log(userOn)
            console.log(userOn.token)

            if (userOn.success) {
                dispatch({
                    type: "USER_UPDATE",
                    payload: userOn.token
                })
            }
            console.log(userOn.message)

        } catch (error) {
            console.log(error)
        }
    }







    /**
     * VERIFY TOKEN
     */
    const verifyToken = async () => {
        const token = localStorage.getItem("token")

        if (token) {
            axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            try {
                const infoUserVerify = await axiosClient.get("/verifyUser")

                dispatch({
                    type: "INFO_USER",
                    payload: infoUserVerify.data.info
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            delete axiosClient.defaults.headers.common["Authorization"]
        }


    }

    /**
     * LOGOUT
     */
    const signOut = async () => {
        try {
            dispatch({ type: "SIGN_OUT" })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider value={{
            loginUser,
            registerUser,
            verifyToken,
            signOut,
            updateUser,
            infoUser: userState.infoUser,
            authStatus: userState.authStatus
        }}>{children}</UserContext.Provider>
    )
}

export default UserProvider