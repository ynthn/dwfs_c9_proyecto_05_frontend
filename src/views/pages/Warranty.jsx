import { Link } from "react-router-dom";


const Warranty = () => {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link className="product-link" to={"/"}>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Garantía del producto</li>
                            </ol>
                        </nav>
                    </div>



                    <div className="col-md-12 mt-5">

                        <h3>¡Garantía de Felicidad para Tu Mascota!</h3>


                        En <b>Pet World</b>, nos enorgullece ofrecer productos de alta calidad para mimar y cuidar a tus adorables mascotas. Estamos tan seguros de la calidad de nuestros productos que respaldamos cada compra con nuestra garantía de satisfacción.

                        <br />

                        <b>Garantía del Producto:</b>
                        <br />
                        Todos nuestros productos están respaldados por una garantía completa de 0 días, garantizando que tu mascota disfrutará de la máxima comodidad y felicidad. Si por alguna razón no estás completamente satisfecho con tu compra, nos comprometemos a solucionarlo de inmediato.
                        <br /><br />
                        Proceso de Garantía:
                        <br />
                        Contáctanos: Si experimentas algún problema con tu producto, comunícate con nuestro equipo de atención al cliente dentro del período de garantía.
                        Evaluación Rápida: Nuestro equipo revisará tu situación y te proporcionará una solución rápida y eficiente.
                        Reemplazo o Reembolso: Si es necesario, te ofreceremos un reemplazo del producto o un reembolso completo, según tus preferencias.
                        <br /><br />
                        Calidad Garantizada:
                        Nos esforzamos por ofrecer productos duraderos y seguros para el bienestar de tus mascotas. Trabajamos con proveedores de confianza y realizamos estrictos controles de calidad para garantizar que cada artículo cumpla con los estándares más altos.

                        En <b>Pet World</b>, estamos comprometidos con la satisfacción de nuestros clientes y el bienestar de tus queridos animales. ¡Compra con confianza y regala a tu mascota la mejor experiencia con nuestros productos de calidad superior!

                    </div>



                </div>
            </div>
        </>
    );
};



export default Warranty;