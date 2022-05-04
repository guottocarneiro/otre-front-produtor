import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Evento from "../../interfaces/evento.interface";
import obterDescricaoEndereco from "../../utils/descricao-endereco.utils";
import Loading from "../Loading/Loading";
import './CardEvento.css';

interface CardEventoInterface {
    evento: Evento;
    alterarStatus: (id: string, status: boolean) => void;
    carregandoStatus: boolean;
}

const CardEvento = ({
    evento,
    alterarStatus,
    carregandoStatus
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
                        disabled={carregandoStatus}
                    >
                        {
                            carregandoStatus ?
                            <Loading pequeno={true} /> :
                            (
                                evento.ativado ?
                                'Desativar' :
                                'Ativar'
                            )
                        }
                    </button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardEvento;
