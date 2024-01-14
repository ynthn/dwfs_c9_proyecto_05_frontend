import { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import UserContext from '../../context/user/UserContext';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/cart/CartContext';
import CartBar from '../card/CartBar';





const Navigation = () => {
  const { infoUser, signOut, authStatus, verifyToken, infoStatus } = useContext(UserContext);
  const [userName, setUserName] = useState("Hola, ");
  const { isCartOpen,setIsCartOpen } = useContext(CartContext);

  const handleOpen = () => {
    setIsCartOpen(true);
  };

  /**
   * LOAD DATA NAME USER
   */
  useEffect(() => {
    const getInfoUser = async () => {
      await verifyToken();

      console.log(infoUser);
      console.log(infoStatus);

      if (infoStatus === true) {
        if (infoUser.name != "undefined") {
          console.log("entro");
          setUserName("Hola, " + infoUser.name);
        }
      }

    }

    getInfoUser();
  }, [infoStatus]);


  return (
    <header>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="/">PET WORLD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/productos">Productos</Nav.Link>
              <Nav.Link href="/checkout">Checkout</Nav.Link>
              {authStatus &&
                <NavDropdown title={userName}>
                  <NavDropdown.Item as={NavLink} to="mi-cuenta">Mi Cuenta</NavDropdown.Item>
                  <NavDropdown.Item onClick={signOut} to="cerrar-sesion">Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
              }
              {!authStatus &&
                <Nav.Link href="/crear-cuenta">Crear Cuenta</Nav.Link>
              }
              {!authStatus &&
                <Nav.Link href="/iniciar-sesion">Iniciar Sesión</Nav.Link>
              }

              <Nav.Link onClick={handleOpen}><i className="bi bi-cart3"></i></Nav.Link>



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isCartOpen && <CartBar></CartBar>}
    </header>


  )
};

export default Navigation