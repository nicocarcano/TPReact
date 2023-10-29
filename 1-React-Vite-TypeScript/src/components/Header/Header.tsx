import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    const navigate = useNavigate();

    return(
        <>    
          <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
              <Container fluid>
                <Navbar.Brand onClick={() => navigate('/')}> El buen sabor </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link onClick={() => navigate('/')}> Home </Nav.Link>
                    <Nav.Link onClick={() => navigate('/componentes')}> Componentes </Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item onClick={() => navigate('/administracion')}> Administracion </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate('/contactos')}> Contactos </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={() => navigate('/')}> Something else here </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </>         
    )
}

export default Header;