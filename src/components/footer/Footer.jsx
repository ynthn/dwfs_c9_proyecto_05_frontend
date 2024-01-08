import "./footer.css";

const Footer = () => {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer__title">Datos de contacto</div>
                            <ul className="footer_list">
                                <li>
                                    <a href="">yonathan.munoz.bravo@gmail.com</a>
                                </li>
                                <li>
                                    <a href="">+569 89162 2225</a>
                                </li>
                                <li>
                                    <a href="">Región del Maule, Chile</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="footer__title">Productos Destacados</div>
                            <ul className="footer_list">
                                <li>
                                    <a href="">Producto 1</a>
                                </li>
                                <li>
                                    <a href="">Producto 2</a>
                                </li>
                                <li>
                                    <a href="">Producto 3</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="footer__title">Centro de ayuda</div>
                            <ul className="footer_list">
                                <li>
                                    <a href="">Iniciar Sesión</a>
                                </li>
                                <li>
                                    <a href="">Crear Cuenta</a>
                                </li>
                                <li>
                                    <a href="">Politicas</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;