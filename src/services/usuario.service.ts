import usuarioStore from '../store/usuario.store';


class UsuarioService {

    logar(id: string, email: string) {
        if (email === 'renan@email.com') {

            localStorage.setItem('otre-usuario', JSON.stringify({ id, email }));
            usuarioStore.adicionarUsuario();
        }
    }

    sair() {
        localStorage.removeItem('otre-usuario');
        usuarioStore.removerUsuario();
    }
}

export default UsuarioService;
