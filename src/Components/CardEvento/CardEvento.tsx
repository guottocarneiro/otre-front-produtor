import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Evento from "../../interfaces/evento.interface";
import obterDescricaoEndereco from "../../utils/descricao-endereco.utils";
import './CardEvento.css';

interface CardEventoInterface {
    evento: Evento;
    alterarStatus: (id:string, status: boolean) => void;
}

const CardEvento = ({
    evento,
    alterarStatus
}: CardEventoInterface) => {
    return (
        <Card className="card-evento">
            <Card.Body>
                <Card.Title><Link to={`/detalhes-evento/${evento.id}`} className="card-evento-titulo">{evento.nome}</Link></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {
                        obterDescricaoEndereco(evento.endereco)
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
                        className="btn btn-secondary btn-sm"
                        onClick={() => alterarStatus(evento.id, evento.ativado)}
                    >
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
