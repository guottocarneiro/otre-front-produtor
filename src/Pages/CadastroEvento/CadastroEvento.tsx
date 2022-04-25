import { useState } from "react";
import { Form } from "react-bootstrap";

interface Ingresso {
    tipo: string
    valor: number
}

const CadastroEvento = () => {

    const [nome, setNome] = useState<string>('');
    const [data, setData] = useState<string>('');

    const [ingressos, setIngressos] = useState<Array<Ingresso>>([{ tipo: '', valor: 0 }]);

    const adicionarIngresso = () => {
        setIngressos([...ingressos, { tipo: '', valor: 0 }])
    }

    const tratarAlteracaoIngresso = (i: number, ev: any) => {
        let novosIngressos = [...ingressos];
        let ingressoParaAlterar = novosIngressos[i];
        if (ev.target.name === 'tipo') {
            ingressoParaAlterar.tipo = ev.target.value;
        } else {
            ingressoParaAlterar.valor = ev.target.value;
        }
        setIngressos(novosIngressos);
    }

    return (
        <>
            <h3>Cadastro evento</h3>
            <p className="text-muted">Os campos com * são obrigatórios</p>
            {
                JSON.stringify(ingressos)
            }
            <Form>

                <fieldset>
                    <legend>Informações gerais</legend>

                    <Form.Group className="mb-3" controlId="formNome">
                        <Form.Label>Nome *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nome do evento"
                            onChange={ev => setNome(ev.target.value)}
                        />
                    </Form.Group>

                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="formData">
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

                <fieldset>
                    <legend>Localização</legend>
                </fieldset>

                <fieldset>
                    <legend>Artistas</legend>
                </fieldset>

                <fieldset>
                    <legend>Ingressos</legend>

                    {
                        ingressos.map((ing, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="col-md-7">
                                        <Form.Group className="mb-3" controlId={`formIngressoTipo${index}`}>
                                            <Form.Label>Tipo ingresso {index + 1}</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder={`Tipo ingresso ${index + 1}`}
                                                onChange={ev => tratarAlteracaoIngresso(index, ev)}
                                                name="tipo"
                                            />
                                        </Form.Group>
                                    </div>

                                    <div className="col-md-5">
                                        <Form.Group className="mb-3" controlId={`formIngressoValor${index}`}>
                                            <Form.Label>Valor ingresso {index + 1}</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder={`Valor ingresso ${index + 1}`}
                                                onChange={ev => tratarAlteracaoIngresso(index, ev)}
                                                name="valor"
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                            );
                        })
                    }

                    <button className="btn btn-sm btn-success" type="button" onClick={() => adicionarIngresso()}>Adicionar ingresso</button>
                </fieldset>

                <div className="text-end mt-3 mb-3">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={nome === '' ||
                            nome === null ||
                            data === '' ||
                            data === null}
                    >
                        Cadastrar
                    </button>
                </div>
            </Form>
        </>
    );
}

export default CadastroEvento;
