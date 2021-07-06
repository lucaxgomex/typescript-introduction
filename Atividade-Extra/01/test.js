"use strict";
exports.__esModule = true;
var variancia_1 = require("./variancia");
var Variancia;
(function (Variancia) {
    var ObjetoCovid = new variancia_1.VariacaoCovid(1.23, 56.89);
    console.log("Valor da porcentagem: " + (ObjetoCovid.calculaVariacao() * 100).toFixed(2) + "%");
    console.log("" + ObjetoCovid.classificacao());
})(Variancia || (Variancia = {}));
