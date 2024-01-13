import { Link } from "react-router-dom";
import UserContext from "../../context/user/UserContext";
import { useContext, useEffect, useState } from "react";
import Login from "./Login";
import ModalMessage from "../../components/modal/ModalMessage";

const Account = () => {
    const [show, setShow] = useState(false);
    const [nameModal, setNameModal] = useState("");

    const { infoUser, authStatus, updateUser, deleteUser, signOut, verifyToken, updateStatus } = useContext(UserContext);


    /**
     * UPDATE USER
     */
    const initialValues = {
        id: "",
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
    const updateSubmit = (event) => {
        event.preventDefault();
        updateUser(user);

        console.log(user);
        console.log(infoUser);


    };

    /**
     * DELETE ACCOUNT
     */
    const deleteAccount = () => {
        console.log("click");
        deleteUser(user);
        signOut();
    };


    /**
     * PRECARGA DE DATOS
     */
    useEffect(() => {

        console.log(infoUser);
        setUser((prevState) => ({
            ...prevState,
            id: infoUser._id,
            name: infoUser.name,
            email: infoUser.email,
        }))
    }, [infoUser]);


    /**
     * LOAD DATA NAME USER
     */
    useEffect(() => {
        const getInfoUser = async () => {
            await verifyToken();
        }
        getInfoUser();
    }, []);


    /**
     * MESSAGE UPDATE
     */
    useEffect(() => {
        if (updateStatus) {
            setNameModal("Datos de usuario Actualizado");
            setShow(true);
        } 
    }, [updateStatus]);



    return (
        authStatus ?
            <>
                <ModalMessage setShow={setShow} show={show}>
                    {nameModal}
                </ModalMessage>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link className="product-link" to={"/"}>Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Mi Cuenta</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-12">
                            <h2 className="title-page">Mi Cuenta</h2>
                        </div>
                    </div>

                    <div className="row">
                        <form onSubmit={updateSubmit}>
                            <div className="col-md-4">
                                <label>Nombre</label>
                                <input type="text" onChange={handleChange} className="form-control" name="name" value={user.name || ''} required />
                            </div>
                            <div className="col-md-4">
                                <label>E-mail</label>
                                <input type="email" className="form-control" name="email" value={user.email || ''} disabled />
                            </div>
                            <div className="col-md-4">
                                <label>Contraseña</label>
                                <input type="password" onChange={handleChange} className="form-control" name="password" />
                            </div>
                            

                            <div className="col-md-4 mt-5">
                                <button type="submit" className="btn btn-primary form-control">Actualizar Datos</button>
                            </div>
                            <div className="col-md-4 mt-2">
                                <button type="button" onClick={deleteAccount} className="btn btn-danger form-control">Eliminar Cuenta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
            :
            <>
                <Login></Login>
            </>

    );
};


export default Account;