import { Defensivel } from './interface/defense';

export class BaseMilitar {
    id: number;
    locationX: string;
    locationY: string;
    damage: number = 0;

    constructor( id: number, locationX: string, locationY: string) {
        this.id = id;
        this.locationX = locationX;
        this.locationY = locationY;
    }

    estaEliminado(): boolean {
        if (this.damage >= 0.9) {
            return true;
        } else {
            return false;
        }
    }

    defenderAtaque(valorAtaque: number) {
        this.damage += valorAtaque;
    }
}
