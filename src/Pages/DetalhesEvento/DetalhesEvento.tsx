import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Evento from '../../interfaces/evento.interface';
import usuarioService from '../../services/usuario.service';
import obterDescricaoEndereco from '../../utils/descricao-endereco.utils';
import './DetalhesEvento.css';

const DetalhesEvento = () => {

    const estadoInicial: Evento = {
        artistas: [],
        data: '',
        descricao: '',
        endereco: {
            bairro: '',
            cidade: '',
            complemento: undefined,
            logradouro: '',
            nome: '',
            numero: '',
            uf: ''
        },
        ingressos: [],
        nome: ''
    }
    const [evento, setEvento] = useState<Evento>(estadoInicial);

    let navigate = useNavigate();

    useEffect(() => {
        if (!usuarioService.logado()) {
            navigate('/login');
        }
    })

    useEffect(() => {
        const novoEvento: Evento = {
            artistas: [
                { nome: 'Duda Beat' },
                { nome: 'BaianaSystem' },
                { nome: 'Djonga' },
                { nome: 'Iza' },
                { nome: 'Silva' },
                { nome: 'Glória Groove' }
            ],
            data: '03/09/2022',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec felis laoreet, euismod velit at, maximus odio.',
            endereco: {
                bairro: 'Pampulha',
                cidade: 'Belo Horizonte',
                complemento: undefined,
                logradouro: 'Avenida Presidente Carlos Luz',
                nome: 'Mineirão',
                numero: '1921',
                uf: 'MG'
            },
            ingressos: [
                { quantidade: 4000, tipo: 'Inteira', valor: 200 },
                { quantidade: 1000, tipo: 'Meia', valor: 100 },
                { quantidade: 1000, tipo: 'Meia solidária', valor: 200 },
                { quantidade: 500, tipo: 'Camarote', valor: 350 }
            ],
            nome: 'Evento do Renan'
        };

        setEvento(novoEvento);
    }, [])

    return (
        <div className="detalhes-evento">
            <div>
                <h1 className="display-3">{evento.nome}</h1>
                <p className="lead">{evento.descricao}</p>
            </div>

            <div className="detalhes-evento-informacoes">
                <p><i className="bi bi-geo-alt"></i> { obterDescricaoEndereco(evento.endereco) }</p>
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
                                            <strong>{ing.tipo}</strong><br />
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
        </div>
    );
}

export default DetalhesEvento;
