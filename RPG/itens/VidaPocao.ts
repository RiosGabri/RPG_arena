import { IItem } from "../interfaces/itens";
import { Raridade } from "../enums/Raridade";
import { Personagem } from "../personagens/Personagem";

export class PocaoVida implements IItem {
  nome = "Poção de Vida";
  descricao = "Recupera 30 de vida";
  raridade = Raridade.Comum;

  usar(alvo: Personagem): void {
    alvo.curar(30);
  }
}
