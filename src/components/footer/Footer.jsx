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
                            <ul className="rrss">
                                <li>
                                    <a href="#">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="footer__title">Categorias de productos</div>
                            <ul className="footer_list">
                                <li>
                                    <a href="">Pelotas</a>
                                </li>
                                <li>
                                    <a href="">Huesos</a>
                                </li>
                                <li>
                                    <a href="">Platos</a>
                                </li>
                                <li>
                                    <a href="">Casas</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="footer__title">Centro de ayuda</div>
                            <ul className="footer_list">
                                <li>
                                    <a href="">Medios de pagos</a>
                                </li>
                                <li>
                                    <a href="">Garantía de producto</a>
                                </li>
                                <li>
                                    <a href="">Terminos y condiciones</a>
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