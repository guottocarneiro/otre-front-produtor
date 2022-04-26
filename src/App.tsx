import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Menu from './components/Menu/Menu';
import CadastroEvento from './pages/CadastroEvento/CadastroEvento';
import ListaEventos from './pages/ListaEventos/ListaEventos';

function App() {
  return (
    <Router>
      <Menu />
      <Container className="app-container">
        <Routes>
          <Route path='/' element={<CadastroEvento />} />
          <Route path='/cadastro-evento' element={<CadastroEvento />} />
          <Route path='/lista-eventos' element={<ListaEventos />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
