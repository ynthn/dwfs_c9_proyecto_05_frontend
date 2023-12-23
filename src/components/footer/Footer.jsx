import "./footer.css";

const Footer = () => {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer__title">Datos de contacto</div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer__title">Categorias</div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer__title">Centro de ayuda</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;