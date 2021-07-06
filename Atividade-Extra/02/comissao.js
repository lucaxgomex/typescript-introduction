"use strict";
exports.__esModule = true;
exports.Comissao = void 0;
var Comissao = /** @class */ (function () {
    function Comissao(nomeVendedor, vendas) {
        this.nomeVendedor = nomeVendedor;
        this.vendas = vendas;
    }
    Comissao.prototype.valorComissao = function () {
        if (this.vendas >= 5000 && this.vendas < 10000) {
            return (this.vendas - 5000) * 0.05;
        }
        else if (this.vendas) {
            return this.vendas * 0.2;
        }
    };
    Comissao.prototype.mostraSalario = function () {
        console.log("Valor ganho: R$ " + (1100 + this.valorComissao()));
    };
    return Comissao;
}());
exports.Comissao = Comissao;
