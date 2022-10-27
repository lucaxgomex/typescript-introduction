/*export interface Guerreiro {
    id: number;
    description: string;
    atackForce: number;
    life: number = 10;
}
*/
import { Defensivel } from './interface/defense';
import { BaseMilitar } from './base';

export class Guerreiro implements Defensivel {
    id: number;
    description: string;
    attackForce: number;
    life: number = 10;

    constructor(id: number, descripton: string, attackForce: number) {
        this.id = id;
        this.description = descripton;
        this.attackForce = attackForce;
    }

    estaEliminado(): boolean {
        if (this.life <= 0) {
            return true;
        } else {
            return false;
        }
    }

    defenderAtaque(valorAtaque: number): number {
        
        this.life = this.life - valorAtaque;

        return this.life
    }

    atacar(parametro: BaseMilitar) {
        if (parametro.estaEliminado() === true) {
            throw 'Impossivel continuar!';
        }

        try {
            parametro.defenderAtaque(this.attackForce);
        } catch (JaEliminadoException) {
            console.error(JaEliminadoException);
        }
    }
}