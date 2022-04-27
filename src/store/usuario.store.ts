import { Subject } from "rxjs";
import { UsuarioLogado } from "../interfaces/usuario.interface";

const usuario = new Subject<UsuarioLogado>();

const estadoInicial = JSON.parse(localStorage.getItem('otre-usuario') as string);

let estado = estadoInicial;

const usuarioStore = {
    init: () => {
        usuario.next(estado);
    },
    subscribe: (setState: any) => usuario.subscribe(setState),
    adicionarUsuario: (id: string, email: string) => {
        estado = {
            id,
            email
        };
        usuario.next(estado);
    },
    removerUsuario: () => {
        estado = null;
        usuario.next(estado);
    },
    estadoInicial
}

export default usuarioStore;
