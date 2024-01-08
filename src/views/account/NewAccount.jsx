import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/user/UserContext";

const NewAccount = () => {

    const navigate = useNavigate();

    const { registerUser } = useContext(UserContext);

    const initialValues = {
        name: "",
        email: "",
        password: ""
    };
    const [user, setUser] = useState(initialValues);

    /**
     * DATA VARIABLE BY INPUT
     */
    const handleChange = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    /**
     * SUBMIT FORM REGISTER
     */
    const registerSubmit = (event) => {
        event.preventDefault();

        registerUser(user);

        setUser(initialValues);

        //navigate("/mi-cuenta");
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
                        <h2 className="title-page">Crear Cuenta</h2>
                    </div>
                </div>

                <div className="row">
                    <form onSubmit={registerSubmit}>
                        <div className="col-md-4">
                            <label>Nombre</label>
                            <input type="text" onChange={handleChange} className="form-control" name="name" required />
                        </div>
                        <div className="col-md-4">
                            <label>E-mail</label>
                            <input type="email" onChange={handleChange} className="form-control" name="email" required />
                        </div>
                        <div className="col-md-4">
                            <label>Contraseña</label>
                            <input type="password" onChange={handleChange} className="form-control" name="password" required />
                        </div>
                        <div className="col-md-4 mt-5">
                            <button type="submit" className="btn btn-primary form-control">Crear Cuenta</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};


export default NewAccount;