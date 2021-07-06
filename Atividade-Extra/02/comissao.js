"use strict";
exports.__esModule = true;
exports.Comissao = void 0;
var Comissao = /** @class */ (function () {
    function Comissao(nomeVendedor, vendas) {
        this.nomeVendedor = nomeVendedor;
        this.vendas = vendas;
    }
    Comissao.prototype.valorComissao = function () {
        var retorno1 = 5000 * 0.05;
        var retorno2 = 2000 * 0.1;
        if (this.vendas > 5000 && this.vendas < 10000) {
            return (this.vendas - 5000) * 0.05;
        }
        else if (this.vendas >= 10000 && this.vendas < 30000) {
            return retorno1 + (this.vendas - 10000) * 0.1;
        }
        else if (this.vendas >= 30000) {
            return retorno1 + retorno2 + (this.vendas - 30000) * 0.2;
        }
        return 0;
    };
    Comissao.prototype.mostraSalario = function () {
        console.log("Valor ganho: R$ " + (1100 + this.valorComissao()));
    };
    return Comissao;
}());
exports.Comissao = Comissao;
