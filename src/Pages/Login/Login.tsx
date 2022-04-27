import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFormulario from "../../components/LoginFormulario/LoginFormulario";
import usuarioService from "../../services/usuario.service";
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [entrando, setEntrando] = useState<boolean>(false);

    const [erro, setErro] = useState<boolean>(false);
    const [textoErro, setTextoErro] = useState<string>('');

    let navigate = useNavigate();

    useEffect(() => {
        if (usuarioService.logado()) {
            navigate('/lista-eventos');
        }
    })

    const entrar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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
