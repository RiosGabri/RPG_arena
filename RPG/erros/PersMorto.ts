export class PersonagemMortoError extends Error {
  constructor() {
    super("O personagem está morto e não pode realizar esta ação.");
  }
}
