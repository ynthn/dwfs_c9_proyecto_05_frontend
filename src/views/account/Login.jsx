import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/user/UserContext";

const Login = () => {

    const navigate = useNavigate();

    const { loginUser, authStatus } = useContext(UserContext);

    if (authStatus) {
        navigate("/mi-cuenta");
    }

    const initialValues = {
        name: "",
        email: "",
        password: ""
    };
    const [user, setUser] = useState(initialValues);

    const [error, setError] = useState("");

    /**
     * DATA VARIABLE BY INPUT
     */
    const handleChange = (e) => {
        console.log(user);
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    /**
     * SUBMIT FORM LOGIN
     */
    const loginSubmit = (event) => {
        event.preventDefault();

        console.log(user);

        loginUser(user);

        setUser(initialValues);

        if (authStatus) {
            navigate("/mi-cuenta");
        } else {
            setError("Datos de acceso Incorrecto");
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link className="product-link" to={"/"}>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Crear Cuenta</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-12">
                        <h2 className="title-page">Iniciar Sesión</h2>
                    </div>
                </div>

                <div className="row">
                    <form onSubmit={loginSubmit}>
                        <div className="col-md-4">
                            <label>E-mail</label>
                            <input type="email" onChange={handleChange} onClick={handleChange} className="form-control" name="email" required />
                        </div>
                        <div className="col-md-4">
                            <label>Contraseña</label>
                            <input type="password" onChange={handleChange} onClick={handleChange} className="form-control" name="password" required />
                        </div>
                        <div className="col-md-4 mt-5">
                            <button type="submit" className="btn btn-primary form-control">Iniciar Sesión</button>
                        </div>
                        <div className="message-error">{error}</div>
                    </form>
                </div>
            </div>
        </>
    );
};


export default Login;