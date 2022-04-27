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
import DetalhesEvento from './pages/DetalhesEvento/DetalhesEvento';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import { useEffect, useState } from 'react';
import usuarioStore from './store/usuario.store';
import usuarioService from './services/usuario.service';

function App() {

  const [usuario, setUsuario] = useState(usuarioStore.estadoInicial);

  useEffect(() => {
    usuarioStore.subscribe(setUsuario);
    usuarioStore.init();
  }, [])

  const sair = () => usuarioService.sair();

  return (
    <Router>
      { 
        usuario !== null && usuario !== undefined ?
        <Menu
          email={usuario.email}
          sair={sair}
        /> :
        null 
      }
      <Container className="app-container">
        <Routes>
          <Route path='/' element={<CadastroEvento />} />
          <Route path='/cadastro-evento' element={<CadastroEvento />} />
          <Route path='/lista-eventos' element={<ListaEventos />} />
          <Route path='/detalhes-evento' element={<DetalhesEvento />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
