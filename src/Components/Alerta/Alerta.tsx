import Toast from 'react-bootstrap/Toast'

interface AlertaInterface {
    titulo: string;
    texto: string;
    exibir: boolean;
    alterarExibir: (exibir: boolean) => void;
}

const Alerta = ({
    titulo,
    texto,
    exibir,
    alterarExibir
}: AlertaInterface) => {
    return (
        <Toast
            className="position-fixed"
            onClose={() => alterarExibir(false)}
            show={exibir}
            delay={4000}
            autohide
            style={{ bottom: '20px', right: '20px', backgroundColor: "#FFF" }}
        >
            <Toast.Header>
                <strong className="me-auto">{titulo}</strong>
            </Toast.Header>
            <Toast.Body>{texto}</Toast.Body>
        </Toast>
    );
}

export default Alerta;
