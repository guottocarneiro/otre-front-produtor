import Evento from "../interfaces/evento.interface";

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
            { quantidade: 4000, tipo: 'Inteira', valor: 200 },
            { quantidade: 1000, tipo: 'Meia', valor: 100 },
            { quantidade: 1000, tipo: 'Meia solidária', valor: 200 },
            { quantidade: 500, tipo: 'Camarote', valor: 350 }
        ],
        nome: 'Evento do Renan',
        idProdutor: '123456',
        id: '987654',
        ativado: true
    }
];

const eventoService = {
    listarEventos: async (idProdutor: string): Promise<Evento[]> => {
        try {
            
            return eventosMock.filter(x => x.idProdutor === idProdutor);
        } catch (erro: any) {
            throw new Error(erro);
        }
    },
    listarEvento: async (idEvento: string): Promise<Evento> => {
        try {
            
            return eventosMock.filter(x => x.id === idEvento)[0];
        } catch (erro: any) {
            throw new Error(erro);
        }
    },
    alterarStatusEvento: async (idEvento: string, status: boolean) => {
        
    },
    cadastrarEvento: async (evento: Evento) => {
        
    }
};

export default eventoService;
