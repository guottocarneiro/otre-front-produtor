import { useState } from "react";
import { Form } from "react-bootstrap";

interface Ingresso {
    tipo: string
    valor: number
}

interface Artista {
    nome: string
}

interface Endereco {
    nome: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
}

interface Evento {
    nome: string;
    data: string;
    endereco: Endereco;
    artistas: Artista[];
    ingressos: Ingresso[];
}

const CadastroEvento = () => {

    const [nome, setNome] = useState<string>('');
    const [data, setData] = useState<string>('');
    const [enderecoNome, setEnderecoNome] = useState<string>('');
    const [enderecoLogradouro, setEnderecoLogradouro] = useState<string>('');
    const [enderecoNumero, setEnderecoNumero] = useState<string>('');
    const [enderecoComplemento, setEnderecoComplemento] = useState<string>('');
    const [enderecoBairro, setEnderecoBairro] = useState<string>('');
    const [enderecoCidade, setEnderecoCidade] = useState<string>('');
    const [enderecoUf, setEnderecoUf] = useState<string>('');

    const [artistas, setArtistas] = useState<Array<Artista>>([{ nome: '' }]);
    const [ingressos, setIngressos] = useState<Array<Ingresso>>([{ tipo: '', valor: 0 }]);

    const adicionarArtista = () => {
        setArtistas([...artistas, { nome: '' }]);
    }

    const tratarAlteracaoArtista = (i: number, ev: React.FormEvent<HTMLInputElement>) => {
        let novosArtistas = [...artistas];
        let artistaParaAlterar = novosArtistas[i];
        artistaParaAlterar.nome = ev.currentTarget.value;
        setArtistas(novosArtistas);
    }

    const adicionarIngresso = () => {
        setIngressos([...ingressos, { tipo: '', valor: 0 }]);
    }

    const tratarAlteracaoIngresso = (i: number, ev: React.FormEvent<HTMLInputElement>) => {
        let novosIngressos = [...ingressos];
        let ingressoParaAlterar = novosIngressos[i];
        if (ev.currentTarget.name === 'ingressoTipo') {
            ingressoParaAlterar.tipo = ev.currentTarget.value;
        } else if (ev.currentTarget.name === 'ingressoValor') {
            let valor = ev.currentTarget.value;
            valor = valor.replace(/\D/g, "");
            valor = valor.replace(/[^0-9\.]+/g, '');
            ev.currentTarget.value = valor;
            ingressoParaAlterar.valor = parseFloat(valor) || 0;
        }
        setIngressos(novosIngressos);
    }

    const camposValidos = () => {
        return nome === '' ||
            nome === null ||
            data === '' ||
            data === null ||
            enderecoNome === '' ||
            enderecoNome === null ||
            enderecoLogradouro === '' ||
            enderecoLogradouro === null ||
            enderecoNumero === '' ||
            enderecoNumero === null ||
            enderecoCidade === '' ||
            enderecoCidade === null ||
            enderecoUf === '' ||
            enderecoUf === null ||
            artistas.some(x => x.nome === '' || x.nome === null) ||
            ingressos.some(x => x.tipo === '' || x.tipo === null || x.valor === 0 || x.valor === null);
    }

    const cadastrarEvento = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const evento: Evento = {
            artistas: artistas,
            data: data,
            endereco: {
                bairro: enderecoBairro,
                cidade: enderecoCidade,
                complemento: enderecoComplemento,
                logradouro: enderecoLogradouro,
                nome: enderecoNome,
                numero: enderecoNumero,
                uf: enderecoUf
            },
            ingressos: ingressos,
            nome: nome
        };

        console.log(evento);
    }

    return (
        <>
            <h3>Cadastro de evento</h3>
            <p className="text-muted">Os campos com (*) são obrigatórios</p>

            <Form onSubmit={cadastrarEvento}>

                <fieldset className="mb-3">
                    <legend>Informações gerais</legend>

                    <Form.Group className="mb-3" controlId="txtNomeEvento">
                        <Form.Label>Nome *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nome do evento"
                            onChange={ev => setNome(ev.target.value)}
                        />
                    </Form.Group>

                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="txtDataEvento">
                                <Form.Label>Data *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Data do evento"
                                    onChange={ev => setData(ev.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </div>

                </fieldset>

                <fieldset className="mb-3">
                    <legend>Localização</legend>

                    <Form.Group className="mb-3" controlId="txtEnderecoNome">
                        <Form.Label>Nome do local *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nome do local"
                            onChange={ev => setEnderecoNome(ev.target.value)}
                        />
                    </Form.Group>

                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="txtEnderecoLogradouro">
                                <Form.Label>Logradouro *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Logradouro"
                                    onChange={ev => setEnderecoLogradouro(ev.target.value)}
                                />
                            </Form.Group>
                        </div>

                        <div className="col-md-3">
                            <Form.Group className="mb-3" controlId="txtEnderecoNumero">
                                <Form.Label>Número *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Número"
                                    onChange={ev => setEnderecoNumero(ev.target.value)}
                                />
                            </Form.Group>
                        </div>

                        <div className="col-md-3">
                            <Form.Group className="mb-3" controlId="txtEnderecoComplemento">
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Complemento"
                                    onChange={ev => setEnderecoComplemento(ev.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </div>


                    <div className="row">

                        <div className="col-md-5">
                            <Form.Group className="mb-3" controlId="txtEnderecoBairro">
                                <Form.Label>Bairro *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Bairro"
                                    onChange={ev => setEnderecoBairro(ev.target.value)}
                                />
                            </Form.Group>
                        </div>

                        <div className="col-md-5">
                            <Form.Group className="mb-3" controlId="txtEnderecoCidade">
                                <Form.Label>Cidade *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Cidade"
                                    onChange={ev => setEnderecoCidade(ev.target.value)}
                                />
                            </Form.Group>
                        </div>

                        <div className="col-md-2">
                            <Form.Group className="mb-3" controlId="txtEnderecoUf">
                                <Form.Label>UF *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="UF"
                                    onChange={ev => setEnderecoUf(ev.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </div>

                </fieldset>

                <fieldset className="mb-3">
                    <legend>Artistas</legend>

                    {
                        artistas.map((art, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3" controlId={`txtArtista${index}`}>
                                            <Form.Label>Artista {index + 1} *</Form.Label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder={`Artista ${index + 1}`}
                                                onChange={ev => tratarAlteracaoArtista(index, ev)}
                                                id={`txtArtista${index}`}
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <button
                        className="btn btn-sm btn-success mb-3"
                        type="button"
                        onClick={() => adicionarArtista()}
                    >
                        Adicionar artista
                    </button>
                </fieldset>

                <fieldset className="mb-3">
                    <legend>Ingressos</legend>

                    {
                        ingressos.map((ing, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3" controlId={`txtIngressoTipo${index}`}>
                                            <Form.Label>Tipo ingresso {index + 1} *</Form.Label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder={`Tipo ingresso ${index + 1}`}
                                                onChange={ev => tratarAlteracaoIngresso(index, ev)}
                                                id={`txtIngressoTipo${index}`}
                                                name="ingressoTipo"
                                            />
                                        </Form.Group>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Group className="mb-3" controlId={`txtIngressoValor${index}`}>
                                            <Form.Label>Valor ingresso {index + 1} *</Form.Label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder={`Valor ingresso ${index + 1}`}
                                                onChange={ev => tratarAlteracaoIngresso(index, ev)}
                                                id={`txtIngressoValor${index}`}
                                                name="ingressoValor"
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                            );
                        })
                    }

                    <button
                        className="btn btn-sm btn-success mb-3"
                        type="button"
                        onClick={() => adicionarIngresso()}
                    >
                        Adicionar ingresso
                    </button>
                </fieldset>

                <div className="text-end mt-3 mb-3">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={camposValidos()}
                    >
                        Cadastrar
                    </button>
                </div>
            </Form>
        </>
    );
}

export default CadastroEvento;