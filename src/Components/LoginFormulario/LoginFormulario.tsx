interface LoginFormularioInterface {
    submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
    onChangeEmail: (valor: string) => void;
    onChangeSenha: (valor: string) => void;
    tituloFormulario: string;
    exibirLoading: boolean;
    textoBotao: string;
    children?: JSX.Element;
}

const LoginFormulario = ({
    onChangeEmail,
    onChangeSenha,
    tituloFormulario,
    submitForm,
    exibirLoading,
    textoBotao,
    children
}: LoginFormularioInterface) => {
    return (
        <form onSubmit={submitForm}>
            <h1 className="h3 mb-3 fw-normal">{tituloFormulario}</h1>

            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    placeholder="nome@exemplo.com"
                    onChange={ev => onChangeEmail(ev.target.value)}
                    id="email"
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Senha"
                    onChange={ev => onChangeSenha(ev.target.value)}
                    id="senha"
                />
            </div>

            {
                children
            }

            <div className="mb-3">
                <button
                    className="w-100 btn btn-lg btn-primary"
                    type="submit"
                    disabled={exibirLoading}
                >
                    {
                        exibirLoading ?
                            <div className="spinner-border text-light spinner-border-sm" role="status">
                                <span className="visually-hidden">Carregando...</span>
                            </div> :
                            textoBotao
                    }
                </button>
            </div>
        </form>
    );
}

export default LoginFormulario;
