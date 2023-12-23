import { Carousel } from "react-bootstrap";

const SliderMain = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img src="banner-1.jpg" className="d-block w-100"></img>
                <Carousel.Caption>
                    <p>Deliciosos sabores y juguetes divertidos: haz feliz a tu peludo amigo con nuestra selección exclusiva.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="banner-2.jpg" className="d-block w-100"></img>
                <Carousel.Caption>
                    <p>Nutrición premium y juguetes irresistibles: porque tus mascotas merecen lo mejor.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="banner-3.jpg" className="d-block w-100"></img>
                <Carousel.Caption>
                    <p>
                        Amor en cada bocado, diversión en cada juego. Bienvenido a la tienda donde los animales son la prioridad.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default SliderMain;