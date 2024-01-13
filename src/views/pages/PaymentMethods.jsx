import { Link } from "react-router-dom";


const PaymentMethods = () => {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link className="product-link" to={"/"}>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Medio de pagos</li>
                            </ol>
                        </nav>
                    </div>



                    <div className="col-md-12 mt-5">

                        <h3>Compra con Confianza: Aceptamos PayPal</h3>


                        En <b>Pet World</b>, valoramos tu comodidad y seguridad en cada transacción. Es por eso que ofrecemos PayPal como una opción de pago confiable y conveniente. Con PayPal, puedes realizar tus compras de forma segura utilizando tu cuenta de PayPal o tarjeta de crédito, brindándote tranquilidad y protección adicional. Selecciona la opción de pago con PayPal durante el proceso de compra y experimenta la facilidad y confianza que proporciona uno de los métodos de pago más reconocidos a nivel mundial.
                        <br /><br />
                        Beneficios de Pagar con PayPal:
                        <br />
                        <ul>
                            <li>
                                Seguridad Asegurada: PayPal utiliza avanzadas medidas de seguridad para proteger tu información financiera, brindándote tranquilidad en cada transacción.
                            </li>
                            <li>
                                Flexibilidad de Pago: Paga con tu cuenta de PayPal o con tarjetas de crédito/débito vinculadas. PayPal te da la flexibilidad que necesitas para realizar tus compras de la manera que prefieras.
                            </li>
                            <li>
                                Protección al Comprador: Disfruta de la Protección al Comprador de PayPal, que te brinda cobertura en caso de disputas o problemas con tu compra.
                            </li>
                            <li>
                                Compra con confianza en <b>Pet World</b> y elige PayPal como tu medio de pago preferido. Estamos comprometidos a proporcionar una experiencia de compra segura y conveniente para nuestros valiosos clientes.
                            </li>
                        </ul>


                    </div>



                </div>
            </div>
        </>
    );
};



export default PaymentMethods;