import { Subject } from "rxjs";

const usuario = new Subject<boolean>();

const estadoInicial = localStorage.getItem('otre-usuario') !== null;

let estado = estadoInicial;

const usuarioStore = {
    init: () => {
        usuario.next(estado);
    },
    subscribe: (setState: any) => usuario.subscribe(setState),
    adicionarUsuario: () => {
        estado = true;
        usuario.next(estado);
    },
    removerUsuario: () => {
        estado = estadoInicial;
        usuario.next(estado);
    },
    estadoInicial
}

export default usuarioStore;
