import CardEvento from "../../Components/CardEvento/CardEvento";
import HeaderPagina from "../../Components/HeaderPagina/HeaderPagina";
import { Evento } from "../CadastroEvento/CadastroEvento";

const ListaEventos = () => {

    const eventosFake: Evento[] = [
      {
          artistas: [],
          data: '03/09/2022',
          descricao: 'Desrição do evento bem detalhadas falando sobre como vai ser etc',
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
          nome: 'Sarará'
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
