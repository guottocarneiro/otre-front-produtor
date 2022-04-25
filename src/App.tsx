import { Container } from 'react-bootstrap';
import './App.css';
import Menu from './Components/Menu/Menu';
import CadastroEvento from './Pages/CadastroEvento/CadastroEvento';

function App() {
  return (
    <>
      <Menu />
      <Container className="app-container">
        <CadastroEvento />
      </Container>
    </>
  );
}

export default App;
