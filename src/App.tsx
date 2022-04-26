import { Container } from 'react-bootstrap';
import './App.css';
import Menu from './components/Menu/Menu';
import CadastroEvento from './pages/CadastroEvento/CadastroEvento';
import ListaEventos from './pages/ListaEventos/ListaEventos';

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
