import { ClassePersonagem } from "../enums/ClassePers";
import { IItem } from "../interfaces/itens";
import { InventarioCheioError } from "../erros/InventCheio";
import { PersonagemMortoError } from "../erros/PersMorto";

export abstract class Personagem {
  private _vida: number;
  private _vidaMaxima: number;
  private _inventario: IItem[] = [];

  public readonly nome: string;
  public classe: ClassePersonagem;
  public ataque: number;
  public defesa: number;

  constructor(
    nome: string,
    classe: ClassePersonagem,
    vidaMaxima: number,
    ataque: number,
    defesa: number
  ) {
    this.nome = nome;
    this.classe = classe;
    this._vidaMaxima = vidaMaxima;
    this._vida = vidaMaxima;
    this.ataque = ataque;
    this.defesa = defesa;
  }

  get vida(): number {
    return this._vida;
  }

  set vida(valor: number) {
    this._vida = Math.max(0, Math.min(valor, this._vidaMaxima));
  }

  estaVivo(): boolean {
    return this._vida > 0;
  }

  atacar(alvo: Personagem): number {
    if (!this.estaVivo() || !alvo.estaVivo()) {
      throw new PersonagemMortoError();
    }

    const dano = Math.max(0, this.ataque - alvo.defesa);
    alvo.vida -= dano;
    return dano;
  }

  curar(quantidade: number): void {
    this.vida += quantidade;
  }

  adicionarItem(item: IItem): void {
    if (this._inventario.length >= 5) {
      throw new InventarioCheioError();
    }
    this._inventario.push(item);
  }

  usarItem(indice: number): void {
    const item = this._inventario[indice];
    if (!item) {
      throw new Error("Item inválido.");
    }
    item.usar(this);
    this._inventario.splice(indice, 1);
  }
}
