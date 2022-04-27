import { useState } from "react";
import { Link } from "react-router-dom";
import LoginFormulario from "../../components/LoginFormulario/LoginFormulario";
import UsuarioService from "../../services/usuario.service";
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [entrando, setEntrando] = useState<boolean>(false);

    const [erro, setErro] = useState<boolean>(false);
    const [textoErro, setTextoErro] = useState<string>('');

    const entrar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const usuarioService = new UsuarioService();
        usuarioService.logar('123456', email);
    }

    return (
        <main className="login">
            <LoginFormulario
                tituloFormulario="Entrar"
                submitForm={entrar}
                exibirLoading={entrando}
                textoBotao="Entrar"
                onChangeEmail={setEmail}
                onChangeSenha={setSenha}
            />
            <div>
                <p>Não é cadastrado? <Link to="/registro">Clique aqui</Link></p>
            </div>
        </main>
    );
}

export default Login;
