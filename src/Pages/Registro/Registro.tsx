import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFormulario from "../../components/LoginFormulario/LoginFormulario";
import usuarioService from "../../services/usuario.service";
import './Registro.css';

const Registro = () => {

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confSenha, setConfSenha] = useState<string>('');
    const [registrando, setRegistrando] = useState<boolean>(false);

    let navigate = useNavigate();

    useEffect(() => {
        if (usuarioService.logado()) {
            navigate('/lista-eventos');
        }
    })

    const registrar = (e: React.FormEvent<HTMLFormElement>) => {
        setRegistrando(true);
    }

    const senhasIncorretas = () => {
        return senha !== '' &&
            senha !== null &&
            confSenha !== '' &&
            confSenha !== null &&
            senha !== confSenha;
    }

    const inputConfirmarSenha = () => {
        return <div className="mb-3">
            <input
                type="password"
                className="form-control"
                placeholder="Confirmar senha"
                onChange={ev => setConfSenha(ev.target.value)}
                id="confSenha"
            />
            {
                senhasIncorretas() ?
                    <small className="mt-1 text-small text-danger">Senhas não correspondem</small> :
                    null
            }
        </div>
    }

    return (
        <main className="registro">
            <LoginFormulario
                onChangeEmail={setEmail}
                onChangeSenha={setSenha}
                submitForm={registrar}
                exibirLoading={registrando}
                textoBotao="Registrar"
                tituloFormulario="Registrar"
            >
                {
                    inputConfirmarSenha()
                }
            </LoginFormulario>
            <div>
                <p>Já é cadastrado? <Link to="/login">Faça seu login</Link></p>
            </div>
        </main>
    )
}

export default Registro;
