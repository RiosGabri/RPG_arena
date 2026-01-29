export class InventarioCheioError extends Error {
  constructor() {
    super("O inventário está cheio.");
  }
}
