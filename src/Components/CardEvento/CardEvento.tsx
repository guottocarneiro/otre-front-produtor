import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Evento from "../../interfaces/evento.interface";
import './CardEvento.css';

interface CardEvento {
    evento: Evento;
}

const CardEvento = ({
    evento
}: CardEvento) => {
    return (
        <Card className="card-evento">
            <Card.Body>
                <Card.Title><Link to="/detalhes-evento" className="card-evento-titulo">{evento.nome}</Link></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {
                        `${evento.endereco.nome} - ${evento.endereco.logradouro}, ${evento.endereco.numero}, ${evento.endereco.complemento === undefined ? evento.endereco.bairro : `${evento.endereco.complemento}, ${evento.endereco.bairro}`} - ${evento.endereco.cidade} - ${evento.endereco.uf}`
                    }
                </Card.Subtitle>
                <Card.Text>
                    {evento.descricao}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardEvento;
