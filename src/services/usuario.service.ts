import usuarioStore from '../store/usuario.store';

const usuarios = [
    { email: 'renan@email.com' },
    { email: 'otto@email.com' }
]

const usuarioService =  {

    logar: (id: string, email: string) => {
        if (usuarios.some(x => x.email === email)) {

            localStorage.setItem('otre-usuario', JSON.stringify({ id, email }));
            usuarioStore.adicionarUsuario(id, email);
        }
    },
    sair: () => {
        localStorage.removeItem('otre-usuario');
        usuarioStore.removerUsuario();
    },
    logado: () => JSON.parse(localStorage.getItem('otre-usuario') as string) != null
}

export default usuarioService;
