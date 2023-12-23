import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {

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
                <Nav.Link href="micuenta">Mi Cuenta</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
};

export default Navigation