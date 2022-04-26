interface HeaderPagina {
    titulo: string;
    descricao?: string;
}

const HeaderPagina = ({
    titulo,
    descricao
}: HeaderPagina) => {
    return (
        <div className="header-pagina">
            <h3 style={{ marginBottom: descricao === undefined ? '1rem' : '.5rem' }}>{titulo}</h3>
            {
                descricao === undefined ?
                null :
                <p className="text-muted">{descricao}</p>
            }
        </div>
    );
}

export default HeaderPagina;
