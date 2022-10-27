"use strict";
exports.__esModule = true;
var guerreiro_1 = require("../guerreiro");
var base_1 = require("../base");
var davi = new guerreiro_1.Guerreiro(29382083, "Rei dos Isreal", 456);
var caanan = new base_1.BaseMilitar(8749345, "12-0", "23-76");
davi.estaEliminado();
davi.defenderAtaque(10);
davi.atacar(caanan);
console.log("eliminacao => ".concat(davi.estaEliminado()));
//erro
console.log("eliminacao => ".concat(davi.defenderAtaque(10)));
