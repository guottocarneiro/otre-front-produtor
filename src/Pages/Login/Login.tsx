import { useState } from "react";
import LoginFormulario from "../../components/LoginFormulario/LoginFormulario";
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [entrando, setEntrando] = useState<boolean>(false);

    const [erro, setErro] = useState<boolean>(false);
    const [textoErro, setTextoErro] = useState<string>('');

    const entrar = () => {

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
        </main>
    );
}

export default Login;
