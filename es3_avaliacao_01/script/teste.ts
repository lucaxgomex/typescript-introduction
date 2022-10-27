import { Guerreiro } from "../guerreiro";
import { BaseMilitar } from "../base"

let davi = new Guerreiro(
    29382083,
    "Rei dos Isreal",
    456
);

let caanan = new BaseMilitar(
    8749345,
    "12-0",
    "23-76"
);

davi.estaEliminado();

davi.defenderAtaque(10);

davi.atacar(caanan);

console.log(`eliminacao => ${davi.estaEliminado()}`)

//erro

console.log(`eliminacao => ${davi.defenderAtaque(10)}`)