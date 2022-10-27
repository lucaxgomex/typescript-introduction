"use strict";
exports.__esModule = true;
exports.Guerreiro = void 0;
var Guerreiro = /** @class */ (function () {
    function Guerreiro(id, descripton, attackForce) {
        this.life = 10;
        this.id = id;
        this.description = descripton;
        this.attackForce = attackForce;
    }
    Guerreiro.prototype.estaEliminado = function () {
        if (this.life <= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Guerreiro.prototype.defenderAtaque = function (valorAtaque) {
        this.life = this.life - valorAtaque;
        return this.life;
    };
    Guerreiro.prototype.atacar = function (parametro) {
        if (parametro.estaEliminado() === true) {
            throw 'Impossivel continuar!';
        }
        try {
            parametro.defenderAtaque(this.attackForce);
        }
        catch (JaEliminadoException) {
            console.error(JaEliminadoException);
        }
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
