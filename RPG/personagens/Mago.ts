import { Personagem } from "./Personagem";
import { ClassePersonagem } from "../enums/ClassePers";
import { ManaInsuficienteError } from "../erros/SemMana";

export class Mago extends Personagem {
  private mana: number = 100;

  constructor(nome: string) {
    super(nome, ClassePersonagem.Mago, 80, 12, 4);
  }

  bolaDeFogo(alvo: Personagem): number {
    if (this.mana < 30) throw new ManaInsuficienteError();
    this.mana -= 30;

    const dano = this.atacar(alvo) * 3;
    alvo.vida -= dano * 2;
    return dano;
  }

  meditar(): void {
    this.mana = Math.min(100, this.mana + 25);
  }
}
