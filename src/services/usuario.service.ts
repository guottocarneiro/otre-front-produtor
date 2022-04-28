import { Usuario, UsuarioLogado } from '../interfaces/usuario.interface';
import usuarioStore from '../store/usuario.store';

const usuarios: UsuarioLogado[] = [
    { email: 'renan@email.com', id: '123456' },
    { email: 'otto@email.com', id: '456789' }
]

const usuarioService = {

    logar: async (usuario: Usuario): Promise<UsuarioLogado | undefined> => {
        try {
            let email = usuario.email;
            if (usuarios.some(x => x.email === email)) {

                const usuarioLogado: UsuarioLogado = usuarios.filter(x => x.email === email)[0];
                localStorage.setItem('otre-usuario', JSON.stringify(usuarioLogado));
                usuarioStore.adicionarUsuario(usuarioLogado.id, usuarioLogado.email);

                return usuarioLogado;
            }
        } catch (erro: any) {
            throw new Error(erro);
        }
    },
    sair: () => {
        localStorage.removeItem('otre-usuario');
        usuarioStore.removerUsuario();
    },
    logado: () => JSON.parse(localStorage.getItem('otre-usuario') as string) != null,
    registrar: async (usuario: Usuario): Promise<UsuarioLogado | undefined> => {
        try {
            let email = usuario.email;
            const usuarioLogado: UsuarioLogado = {
                id: '123456',
                email
            };

            return usuarioLogado;
        } catch (erro: any) {
            throw new Error(erro);
        }
    }
}

export default usuarioService;
