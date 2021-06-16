import { Personagem, Soldado, Cavaleiro } from './Personagens';

class Jogo {
	public readonly info: object;

	constructor(info: object) {
		 this.info = info;
	}       
}

const obj = new Personagem(10, 'Angular', 100);
console.log(`${obj}`);

