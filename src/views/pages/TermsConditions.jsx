import { Link } from "react-router-dom";


const TermsConditions = () => {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link className="product-link" to={"/"}>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Términos y condiciones</li>
                            </ol>
                        </nav>
                    </div>



                    <div className="col-md-12 mt-5">


                        <h3>Términos y Condiciones para Nuestra Comunidad de Amantes de Mascotas</h3>

                        <br /><br />
                        1. Información General:
                        Bienvenido a <b>Pet World</b>, el destino ideal para todos los amantes de las mascotas. Antes de realizar cualquier compra, te invitamos a leer detenidamente nuestros términos y condiciones para garantizar una experiencia de compra positiva.
                        <br /><br />
                        2. Compras y Pagos:
                        Al realizar una compra en nuestro sitio web, aceptas proporcionar información precisa y actualizada. Nos reservamos el derecho de rechazar o cancelar cualquier pedido en cualquier momento por razones que incluyen, entre otras, la disponibilidad del producto, errores en la descripción o el precio del producto, o problemas con el pago.
                        <br /><br />
                        3. Envíos y Entregas:
                        Nos esforzamos por garantizar envíos rápidos y seguros. Consulta nuestra política de envíos para conocer los plazos de entrega estimados. Ten en cuenta que algunos retrasos pueden ocurrir debido a circunstancias fuera de nuestro control.
                        <br /><br />
                        4. Devoluciones y Cambios:
                        Queremos que tú y tus mascotas estén completamente satisfechos con su compra. Consulta nuestra política de devoluciones para obtener información detallada sobre cómo procesar devoluciones y cambios.
                        <br /><br />
                        5. Privacidad y Seguridad:
                        Tu privacidad es de suma importancia para nosotros. Consulta nuestra política de privacidad para obtener información sobre cómo manejamos y protegemos tus datos personales.
                        <br /><br />
                        6. Garantía de Productos:
                        Todos nuestros productos están respaldados por una garantía de calidad. Consulta nuestra sección de garantía para conocer los detalles y los pasos a seguir en caso de problemas con tu compra.
                        <br /><br />
                        7. Uso Responsable del Sitio:
                        Al acceder y utilizar nuestro sitio web, te comprometes a hacerlo de manera legal y ética. No toleramos el uso indebido del sitio, incluido el acceso no autorizado, la manipulación de datos, o cualquier actividad que pueda dañar nuestra reputación.
                        <br /><br />
                        8. Cambios en los Términos y Condiciones:
                        Nos reservamos el derecho de modificar o actualizar estos términos y condiciones en cualquier momento. Te recomendamos revisar esta página regularmente para mantenerte informado sobre cualquier cambio.
                        <br /><br />
                        Al realizar una compra en <b>Pet World</b>, confirmas que has leído, comprendido y aceptado estos términos y condiciones. Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto con nuestro equipo de atención al cliente.
                        <br /><br />
                        Gracias por ser parte de nuestra comunidad de amantes de mascotas. ¡Esperamos que disfrutes de tus compras en <b>Pet World</b>!

                    </div>



                </div>
            </div>
        </>
    );
};



export default TermsConditions;