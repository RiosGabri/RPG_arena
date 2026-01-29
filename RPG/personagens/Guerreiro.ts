import { Personagem } from "./Personagem";
import { ClassePersonagem } from "../enums/ClassePers";

export class Guerreiro extends Personagem {
  constructor(nome: string) {
    super(nome, ClassePersonagem.Guerreiro, 150, 18, 8);
  }

  golpeBrutal(alvo: Personagem): number {
    const dano = this.atacar(alvo) * 2;
    alvo.vida -= dano / 2;
    return dano;
  }
}
