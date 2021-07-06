export class VariacaoCovid {
	private casos14Dias: number;
	private casosHoje: number;
	
	constructor(casos14Dias: number, casosHoje: number) {
		this.casos14Dias = casos14Dias;
		this.casosHoje = casosHoje;
	}
	
	public calculaVariacao(): number {
		return (this.casosHoje / this.casos14Dias) - 1;
	}
	
	public classificacao(): string {
		let valor: number = this.calculaVariacao();
		
		if (valor < 0.15) {
			return "Em Estabilidade";
		} else if (valor == 0.15) {
			return "Em Queda";
		} else {
			return "Em Alta";
		}
	}
}

