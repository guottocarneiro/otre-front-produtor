import { Subject } from "rxjs";

const usuario = new Subject();

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
        estado = estadoInicial;
        usuario.next(estado);
    },
    estadoInicial
}

export default usuarioStore;
