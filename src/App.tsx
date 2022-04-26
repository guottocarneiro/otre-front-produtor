import { Container } from 'react-bootstrap';
import './App.css';
import Menu from './Components/Menu/Menu';
import CadastroEvento from './Pages/CadastroEvento/CadastroEvento';
import ListaEventos from './Pages/ListaEventos/ListaEventos';

function App() {
  return (
    <>
      <Menu />
      <Container className="app-container">
        {/* <CadastroEvento /> */}
        <ListaEventos />
      </Container>
    </>
  );
}

export default App;
