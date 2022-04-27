import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFormulario from "../../components/LoginFormulario/LoginFormulario";
import { Usuario } from "../../interfaces/usuario.interface";
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

        setEntrando(true);
        const usuario: Usuario = {
            email,
            senha
        };

        usuarioService.logar(usuario)
        .catch((erro: any) => {
            setErro(true);
            setTextoErro('Ocorreu um erro ao fazer login. Tente novamente mais tarde!');
            console.error(`[ERRO]: ${erro}`);
        })
        .finally(() => setEntrando(false))
    }

    const exibirErro = () => {
        return erro === true &&
            textoErro !== '' &&
            textoErro !== null;
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
            {
                exibirErro() ?
                    <div className="alert alert-danger">
                        {textoErro}
                    </div> :
                    null
            }
        </main>
    );
}

export default Login;
