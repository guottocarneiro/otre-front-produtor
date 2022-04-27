import usuarioStore from '../store/usuario.store';

const usuarios = [
    { email: 'renan@email.com' },
    { email: 'otto@email.com' }
]

class UsuarioService {

    logar(id: string, email: string) {
        if (usuarios.some(x => x.email === email)) {

            localStorage.setItem('otre-usuario', JSON.stringify({ id, email }));
            usuarioStore.adicionarUsuario(id, email);
        }
    }

    sair() {
        localStorage.removeItem('otre-usuario');
        usuarioStore.removerUsuario();
    }
}

export default UsuarioService;
