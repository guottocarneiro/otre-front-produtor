import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Evento from "../../interfaces/evento.interface";
import './CardEvento.css';

interface CardEventoInterface {
    evento: Evento;
}

const CardEvento = ({
    evento
}: CardEventoInterface) => {
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
                    <span className="card-evento-texto-status">
                        <strong>
                            Status: 
                            <span className={evento.ativado ? 'text-success' : 'text-danger'}>
                                {
                                    evento.ativado ?
                                    ' Ativado' :
                                    ' Desativado'
                                }
                            </span>
                        </strong>
                    </span>
                    <button
                        className="btn btn-secondary btn-sm">
                            {
                                evento.ativado ?
                                'Desativar' :
                                'Ativar'
                            }
                    </button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardEvento;
