import { Defensivel } from './interface/defense';

import { Guerreiro } from './guerreiro';
import { BaseMilitar } from './base';

class CenarioBatalha {
    g: Array<Guerreiro>;
    b: Array<BaseMilitar>;

    constructor(guerreiro: Array<Guerreiro>, base: Array<BaseMilitar>) {
        this.g = guerreiro;
        this.b = base;
    }

    avaliar(guerreiro: Array<Guerreiro>, base: Array<BaseMilitar>) {
        
    }
}