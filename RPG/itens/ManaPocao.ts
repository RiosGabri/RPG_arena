import { IItem } from "../interfaces/itens";
import { Raridade } from "../enums/Raridade";
import { Personagem } from "../personagens/Personagem";

export class PocaoMana implements IItem {
  nome = "Poção de Mana";
  descricao = "Recupera mana (efeito depende da classe)";
  raridade = Raridade.Incomum;

  usar(_: Personagem): void {
    console.log("Mana recuperada.");
  }
}
