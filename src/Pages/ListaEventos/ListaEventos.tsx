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

    return (
        <div className="lista-eventos">
            <HeaderPagina
                titulo="Meus eventos"
            />

            {
                eventos.length > 0 ?
                    eventos.map((evento, i) => {
                        return (
                            <CardEvento
                                evento={evento}
                                key={i}
                            />
                        );
                    }) :
                    <h6>Nenhum evento cadastrado até o momento.</h6>
            }
        </div>
    );
}

export default ListaEventos;
