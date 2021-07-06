export class Comissao {
	private nomeVendedor: string;
	private vendas: number;
	
	constructor(nomeVendedor: string, vendas: number) {
		this.nomeVendedor = nomeVendedor;
		this.vendas = vendas;
	}
	
	public valorComissao(): number {
		if (this.vendas >= 5000 && this.vendas < 10000) {
			return (this.vendas - 5000) * 0.05;
		} else if (this.vendas) {
			return this.vendas * 0.2;
		}
	}
	
	public mostraSalario(): void {
		console.log(`Valor ganho: R$ ${1100 + this.valorComissao()}`);
	}
}
