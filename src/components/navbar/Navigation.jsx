import { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import UserContext from '../../context/user/UserContext';
import { NavLink } from 'react-router-dom';





const Navigation = () => {

  const { infoUser, signOut, authStatus, verifyToken } = useContext(UserContext);
  const [userName, setUserName] = useState("No conectado");


  useEffect(() => {
    const getInfoUser = async () => {
      await verifyToken();
      
      if (infoUser.name != "undefined") {
        setUserName("Hola, " + infoUser.name)
      }

    }
    getInfoUser();
  }, [userName]);


  return (
    <header>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="/">PET WORLD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="productos">Productos</Nav.Link>
              {authStatus &&
                <NavDropdown title={userName}>
                  <NavDropdown.Item as={NavLink} to="mi-cuenta">Mi Cuenta</NavDropdown.Item>
                  <NavDropdown.Item onClick={signOut} to="cerrar-sesion">Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
              }
              {!authStatus &&
                <Nav.Link href="crear-cuenta">Crear Cuenta</Nav.Link>
              }
              {!authStatus &&
                <Nav.Link href="iniciar-sesion">Iniciar Sesión</Nav.Link>
              }





            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
};

export default Navigation