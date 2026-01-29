import { Personagem } from "../personagens/Personagem";

export class Arena {
  lutadores: Personagem[] = [];

  adicionarLutador(lutador: Personagem): void {
    this.lutadores.push(lutador);
  }

  listarLutadores(): void {
    this.lutadores.forEach(l =>
      console.log(`${l.nome} - ${l.classe} - Vida: ${l.vida}`)
    );
  }

  buscarLutador(nome: string): Personagem {
    const lutador = this.lutadores.find(l => l.nome === nome);
    if (!lutador) throw new Error("Lutador não encontrado.");
    return lutador;
  }

  batalhar(nome1: string, nome2: string): void {
    const p1 = this.buscarLutador(nome1);
    const p2 = this.buscarLutador(nome2);

    let atacante = p1;
    let defensor = p2;

    console.log(`⚔️ Batalha entre ${p1.nome} e ${p2.nome}`);

    while (p1.estaVivo() && p2.estaVivo()) {
      try {
        const dano = atacante.atacar(defensor);
        console.log(`${atacante.nome} atacou ${defensor.nome} causando ${dano}`);
        console.log(`Vida de ${defensor.nome}: ${defensor.vida}`);
        [atacante, defensor] = [defensor, atacante];
      } catch (e) {
        console.error(e instanceof Error ? e.message : e);
        break;
      }
    }

    const vencedor = p1.estaVivo() ? p1 : p2;
    console.log(`🏆 Vencedor: ${vencedor.nome}`);
  }
}
