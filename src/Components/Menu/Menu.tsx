import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Menu.css';

interface MenuInterface {
    email: string;
    sair: () => void
}

const Menu = ({
    email,
    sair
}: MenuInterface) => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">otre</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavBasic" />
                <Navbar.Collapse id="navbarNavBasic">
                    <Nav className="me-auto">
                        <NavDropdown title="Eventos" id="navDropdownEsquerdaEventos">
                            <Link to="/cadastro-evento" data-rr-ui-dropdown-item="" className="dropdown-item">Cadastrar</Link>
                            <Link to="/lista-eventos" data-rr-ui-dropdown-item="" className="dropdown-item">Listar</Link>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavDropdown title={email} id="navDropdownDireitaEventos">
                            <span
                                data-rr-ui-dropdown-item=""
                                className="dropdown-item menu-lista-direita-sair"
                                onClick={() => sair()}
                            >
                                    Sair
                            </span>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
