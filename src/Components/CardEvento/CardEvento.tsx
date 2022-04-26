import { Card } from "react-bootstrap";
import { Evento } from "../../Pages/CadastroEvento/CadastroEvento";

interface CardEvento {
    evento: Evento;
}

const CardEvento = ({
    evento
}: CardEvento) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{evento.nome}</Card.Title>
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
