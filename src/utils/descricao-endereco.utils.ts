import Endereco from "../interfaces/endereco.interface";

function obterDescricaoEndereco(endereco: Endereco) {
    return `${endereco.nome} - ${endereco.logradouro}, ${endereco.numero}, ${endereco.complemento === undefined || endereco.complemento === '' ? endereco.bairro : `${endereco.complemento}, ${endereco.bairro}`} - ${endereco.cidade} - ${endereco.uf}`;
}

export default obterDescricaoEndereco;
