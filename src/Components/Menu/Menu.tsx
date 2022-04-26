import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Rotto</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavBasic" />
                <Navbar.Collapse id="navbarNavBasic">
                    <Nav className="me-auto">
                        <NavDropdown title="Eventos" id="navDropdownEventos">
                            <Link to="/cadastro-evento" data-rr-ui-dropdown-item="" className="dropdown-item">Cadastrar</Link>
                            <Link to="/lista-eventos" data-rr-ui-dropdown-item="" className="dropdown-item">Listar</Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
