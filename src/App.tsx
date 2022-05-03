import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
import usuarioStore from './store/usuario.store';
import usuarioService from './services/usuario.service';
import Login from './Pages/Login/Login';
import Menu from './Components/Menu/Menu';
import CadastroEvento from './Pages/CadastroEvento/CadastroEvento';
import DetalhesEvento from './Pages/DetalhesEvento/DetalhesEvento';
import ListaEventos from './Pages/ListaEventos/ListaEventos';
import Registro from './Pages/Registro/Registro';

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
          <Route path='/' element={<Login />} />
          <Route path='*' element={<Login />} />
          <Route path='/cadastro-evento' element={<CadastroEvento />} />
          <Route path='/lista-eventos' element={<ListaEventos />} />
          <Route path='/detalhes-evento/:id' element={<DetalhesEvento />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
