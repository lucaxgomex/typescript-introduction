"use strict";
exports.__esModule = true;
exports.BaseMilitar = void 0;
var BaseMilitar = /** @class */ (function () {
    function BaseMilitar(id, locationX, locationY) {
        this.damage = 0;
        this.id = id;
        this.locationX = locationX;
        this.locationY = locationY;
    }
    BaseMilitar.prototype.estaEliminado = function () {
        if (this.damage >= 0.9) {
            return true;
        }
        else {
            return false;
        }
    };
    BaseMilitar.prototype.defenderAtaque = function (valorAtaque) {
        this.damage += valorAtaque;
    };
    return BaseMilitar;
}());
exports.BaseMilitar = BaseMilitar;
