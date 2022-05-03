import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardEvento from "../../Components/CardEvento/CardEvento";
import HeaderPagina from "../../Components/HeaderPagina/HeaderPagina";
import Evento from "../../interfaces/evento.interface";
import { UsuarioLogado } from "../../interfaces/usuario.interface";
import eventoService from "../../services/evento.service";
import usuarioService from "../../services/usuario.service";
import usuarioStore from "../../store/usuario.store";

const ListaEventos = () => {

    const [eventos, setEventos] = useState<Evento[]>([]);
    const [usuario, setUsuario] = useState<UsuarioLogado>(usuarioStore.estadoInicial);

    let navigate = useNavigate();

    useEffect(() => {
        if (!usuarioService.logado()) {
            navigate('/login');
        }

        usuarioStore.subscribe(setUsuario);
        usuarioStore.init();
    }, [navigate, usuario])

    useEffect(() => {

        if (usuario !== null) {
            eventoService.listarEventos(usuario.id)
                .then(eventos => {
                    setEventos(eventos)
                })
        }
    }, [usuario])

    const alterarStatus = (id: string, status: boolean) => {
        eventoService.alterarStatusEvento(id, status)
            .then(() => {
                const copiaEventos = [...eventos];
                const eventoParaAlterar = copiaEventos.filter(x => x.id === id)[0];
                eventoParaAlterar.ativado = !eventoParaAlterar.ativado;
                setEventos(copiaEventos);
            })

    }

    return (
        <div className="lista-eventos">
            <HeaderPagina
                titulo="Meus eventos"
            />

            {
                eventos.length > 0 ?
                    eventos.map(evento => {
                        return (
                            <CardEvento
                                evento={evento}
                                key={evento.id}
                                alterarStatus={alterarStatus}
                            />
                        );
                    }) :
                    <h6>Nenhum evento cadastrado até o momento.</h6>
            }
        </div>
    );
}

export default ListaEventos;
