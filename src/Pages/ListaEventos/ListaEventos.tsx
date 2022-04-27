import CardEvento from "../../components/CardEvento/CardEvento";
import HeaderPagina from "../../components/HeaderPagina/HeaderPagina";
import Evento from "../../interfaces/evento.interface";

const ListaEventos = () => {

    const eventosFake: Evento[] = [
      {
          artistas: [],
          data: '03/09/2022',
          descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec felis laoreet, euismod velit at, maximus odio.',
          endereco: {
              bairro: 'Pampulha',
              cidade: 'Belo Horizonte',
              complemento: undefined,
              logradouro: 'Avenida Presidente Carlos Luz',
              nome: 'Mineirão',
              numero: '1921',
              uf: 'MG'
          },
          ingressos: [],
          nome: 'Evento do Renan'
      },
      {
        artistas: [],
        data: '03/09/2022',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec felis laoreet, euismod velit at, maximus odio.',
        endereco: {
            bairro: 'Pampulha',
            cidade: 'Belo Horizonte',
            complemento: undefined,
            logradouro: 'Avenida Presidente Carlos Luz',
            nome: 'Mineirão',
            numero: '1921',
            uf: 'MG'
        },
        ingressos: [],
        nome: 'Evento do Renan'
    }
    ];

    return (
        <div className="lista-eventos">
            <HeaderPagina
                titulo="Meus eventos"
            />

            {
                eventosFake.map((evento, i) => {
                    return (
                        <CardEvento
                            evento={evento}
                            key={i}
                        />
                    );
                })
            }
        </div>
    );
}

export default ListaEventos;
