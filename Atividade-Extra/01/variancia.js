"use strict";
exports.__esModule = true;
exports.VariacaoCovid = void 0;
var VariacaoCovid = /** @class */ (function () {
    function VariacaoCovid(casos14Dias, casosHoje) {
        this.casos14Dias = casos14Dias;
        this.casosHoje = casosHoje;
    }
    VariacaoCovid.prototype.calculaVariacao = function () {
        return (this.casosHoje / this.casos14Dias) - 1;
    };
    VariacaoCovid.prototype.classificacao = function () {
        var valor = this.calculaVariacao();
        if (valor > 0 && valor < 0.15) {
            return "Em Estabilidade";
        }
        else if (valor == 0) {
            return "Em Queda";
        }
        return "Em Alta";
    };
    return VariacaoCovid;
}());
exports.VariacaoCovid = VariacaoCovid;
