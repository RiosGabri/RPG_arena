import { Personagem } from "./Personagem";
import { ClassePersonagem } from "../enums/ClassePers";
import { ManaInsuficienteError } from "../erros/SemMana";

export class Arqueiro extends Personagem {
  private mana: number = 50;

  constructor(nome: string) {
    super(nome, ClassePersonagem.Arqueiro, 100, 14, 6);
  }

  override atacar(alvo: Personagem): number {
    let dano = super.atacar(alvo);
    if (Math.random() <= 0.3) {
      dano *= 2;
      alvo.vida -= dano / 2;
    }
    return dano;
  }

  flechaPrecisa(alvo: Personagem): number {
    if (this.mana < 15) throw new ManaInsuficienteError();
    this.mana -= 15;
    return this.atacar(alvo);
  }
}
