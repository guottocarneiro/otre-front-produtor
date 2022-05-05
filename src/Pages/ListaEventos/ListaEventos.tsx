import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardEvento from "../../Components/CardEvento/CardEvento";
import HeaderPagina from "../../Components/HeaderPagina/HeaderPagina";
import Loading from "../../Components/Loading/Loading";
import Evento from "../../interfaces/evento.interface";
import { UsuarioLogado } from "../../interfaces/usuario.interface";
import eventoService from "../../services/evento.service";
import usuarioService from "../../services/usuario.service";
import usuarioStore from "../../store/usuario.store";

const ListaEventos = () => {

    const [eventos, setEventos] = useState<Evento[]>([]);
    const [usuario, setUsuario] = useState<UsuarioLogado>(usuarioStore.estadoInicial);

    const [loading, setLoading] = useState<boolean>(false);

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
            setLoading(true);
            eventoService.listarEventos(usuario.id)
                .then(eventos => {
                    setEventos(eventos)
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [usuario])

    const alterarStatus = (id: string, status: boolean) => {
        
        eventoService.alterarStatusEvento(usuario.id, id, !status)
            .then(() => {
                const copiaEventos = [...eventos];
                const eventoParaAlterar = copiaEventos.filter(x => x.id === id)[0];
                eventoParaAlterar.ativado = !eventoParaAlterar.ativado;
                setEventos(copiaEventos);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="lista-eventos">

            {
                loading ?
                <div className="text-center">
                    <Loading pequeno={false} />
                </div> :
                <>
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
                </>
            }


        </div>
    );
}

export default ListaEventos;
