"use strict";
exports.__esModule = true;
var comissao_1 = require("./comissao");
var ComissaoNamespace;
(function (ComissaoNamespace) {
    var ObjetoComissao = new comissao_1.Comissao("Ely", 100);
    ObjetoComissao.valorComissao();
    ObjetoComissao.mostraSalario();
})(ComissaoNamespace || (ComissaoNamespace = {}));
