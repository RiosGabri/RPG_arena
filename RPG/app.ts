import { Guerreiro } from "./personagens/Guerreiro";
import { Mago } from "./personagens/Mago";
import { Arqueiro } from "./personagens/Arqueiro";
import { Arena } from "./arena/Arena";
import { PocaoVida } from "./itens/VidaPocao";

const guerreiro = new Guerreiro("Thor");
const mago = new Mago("Merlin");
const arqueiro = new Arqueiro("Legolas");

guerreiro.adicionarItem(new PocaoVida());
mago.adicionarItem(new PocaoVida());

const arena = new Arena();
arena.adicionarLutador(guerreiro);
arena.adicionarLutador(mago);
arena.adicionarLutador(arqueiro);

arena.listarLutadores();

arena.batalhar("Thor", "Merlin");

try {
  mago.bolaDeFogo(guerreiro);
} catch (e) {
  console.error("Erro capturado:", e instanceof Error ? e.message : e);
}
