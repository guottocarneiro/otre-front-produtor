import Evento from "../interfaces/evento.interface";

const URL_EVENTO = 'https://otre-backend.herokuapp.com/eventos';

const eventosMock: Evento[] = [
    {
        artistas: [
            { nome: 'Duda Beat' },
            { nome: 'BaianaSystem' },
            { nome: 'Djonga' },
            { nome: 'Iza' },
            { nome: 'Silva' },
            { nome: 'Glória Groove' }
        ],
        data: '03/09/2022',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec felis laoreet, euismod velit at, maximus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec felis laoreet, euismod velit at, maximus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec felis laoreet, euismod velit at, maximus odio.',
        endereco: {
            bairro: 'Pampulha',
            cidade: 'Belo Horizonte',
            complemento: undefined,
            logradouro: 'Avenida Presidente Carlos Luz',
            nome: 'Mineirão',
            numero: '1921',
            uf: 'MG'
        },
        ingressos: [
            { quantidade: 4000, nome: 'Inteira', valor: 200 },
            { quantidade: 1000, nome: 'Meia', valor: 100 },
            { quantidade: 1000, nome: 'Meia solidária', valor: 200 },
            { quantidade: 500, nome: 'Camarote', valor: 350 }
        ],
        nome: 'Evento do Renan',
        idProdutor: '123456',
        id: '987654',
        ativado: true
    },
    {
        artistas: [
            { nome: 'Duda Beat' },
            { nome: 'BaianaSystem' },
            { nome: 'Djonga' },
            { nome: 'Iza' },
            { nome: 'Silva' },
            { nome: 'Glória Groove' }
        ],
        data: '03/09/2022',
        descricao: 'Lorem',
        endereco: {
            bairro: 'Pampulha',
            cidade: 'Belo Horizonte',
            complemento: undefined,
            logradouro: 'Avenida Presidente Carlos Luz',
            nome: 'Mineirão',
            numero: '1921',
            uf: 'MG'
        },
        ingressos: [
            { quantidade: 4000, nome: 'Inteira', valor: 200 },
            { quantidade: 1000, nome: 'Meia', valor: 100 },
            { quantidade: 1000, nome: 'Meia solidária', valor: 200 },
            { quantidade: 500, nome: 'Camarote', valor: 350 }
        ],
        nome: 'Evento do Renan',
        idProdutor: '123456',
        id: '753951',
        ativado: true
    }
];

const eventoService = {
    listarEventos: async (idProdutor: string): Promise<Evento[]> => {
        try {
            
            const eventos = await fetch(`${URL_EVENTO}/${idProdutor}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(resposta => resposta.json())
            .then((eventos: Evento[]) => {

                return eventos;
            });

            return eventos;
        } catch (erro: any) {
            throw new Error(erro);
        }
    },
    listarEvento: async (idProdutor: string, idEvento: string): Promise<Evento> => {
        try {
            
            const corpo = {
                idProdutor,
                idEvento
            };

            const evento = await fetch(`${URL_EVENTO}/buscar`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(corpo)
            })
            .then(resposta => resposta.json())
            .then((eventos: Evento) => {

                return eventos;
            });

            return evento;
        } catch (erro: any) {
            throw new Error(erro);
        }
    },
    alterarStatusEvento: async (idEvento: string, status: boolean) => {
        
    },
    cadastrarEvento: async (evento: Evento) => {
        let corpo = { ...evento };

        await fetch(URL_EVENTO, {
            method: 'POST',
            body: JSON.stringify(corpo),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
};

export default eventoService;
