import { Container } from 'react-bootstrap';
import './App.css';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <>
      <Menu />
      <Container className="app-container">
        Teste
      </Container>
    </>
  );
}

export default App;
