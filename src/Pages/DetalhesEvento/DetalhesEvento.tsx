import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Evento from '../../interfaces/evento.interface';
import { UsuarioLogado } from '../../interfaces/usuario.interface';
import eventoService from '../../services/evento.service';
import usuarioService from '../../services/usuario.service';
import usuarioStore from '../../store/usuario.store';
import obterDescricaoEndereco from '../../utils/descricao-endereco.utils';
import './DetalhesEvento.css';

const DetalhesEvento = () => {

    const [evento, setEvento] = useState<Evento | null>(null);
    const [usuario, setUsuario] = useState<UsuarioLogado>(usuarioStore.estadoInicial);

    let navigate = useNavigate();

    useEffect(() => {
        if (!usuarioService.logado()) {
            navigate('/login');
            return;
        }

        usuarioStore.subscribe(setUsuario);
        usuarioStore.init();
    }, [navigate, usuario])

    let { id } = useParams();

    useEffect(() => {
        if (usuario !== null) {
            const obterEvento = async () => eventoService.listarEvento(usuario.id, id as string)
                .then(evento => {
                    setEvento(evento)
                });

            obterEvento();
        }

    }, [id, usuario])

    return (
        <div className="detalhes-evento">
            {
                evento !== null && evento !== undefined ?
                    <>
                        <div className="detalhes-evento-cabecalho">
                            <h1 className="display-3">{evento.nome}</h1>
                            <h5 className={evento.ativado ? "text-success" : "text-danger"}>
                                { evento.ativado ? "Ativado" : "Desativado" }
                            </h5>
                            <p className="lead">{evento.descricao}</p>
                        </div>

                        <div className="detalhes-evento-informacoes">
                            <p><i className="bi bi-geo-alt"></i> {obterDescricaoEndereco(evento?.endereco)}</p>
                            <p><i className="bi bi-calendar"></i> {evento.data}</p>
                        </div>

                        <div className="detalhes-evento-artistas detalhes-evento-container">
                            <h5>Artistas</h5>

                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        {
                                            evento.artistas.map((art, i) => {
                                                return (
                                                    <li key={i} className="list-group-item">{art.nome}</li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="detalhes-evento-ingressos detalhes-evento-container">
                            <h5>Ingressos</h5>

                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group">
                                        {
                                            evento.ingressos.map((ing, i) => {
                                                return (
                                                    <li key={i} className="list-group-item">
                                                        <strong>{ing.nome}</strong><br />
                                                        {ing.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}<br />
                                                        Quantidade: {ing.quantidade.toLocaleString('pt-br')}
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </> :
                    null
            }
        </div>
    );
}

export default DetalhesEvento;
