export class ManaInsuficienteError extends Error {
  constructor() {
    super("Mana insuficiente para usar esta habilidade.");
  }
}
