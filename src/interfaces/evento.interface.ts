import Artista from "./artista.interface";
import Endereco from "./endereco.interface";
import Ingresso from "./ingresso.interface";

export default interface Evento {
    nome: string;
    descricao: string;
    data: string;
    endereco: Endereco;
    artistas: Artista[];
    ingressos: Ingresso[];
}
