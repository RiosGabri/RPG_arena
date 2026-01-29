import { Raridade } from "../enums/Raridade";
import { Personagem } from "../personagens/Personagem";

export interface IItem {
  nome: string;
  descricao: string;
  raridade: Raridade;
  usar(alvo: Personagem): void;
}
