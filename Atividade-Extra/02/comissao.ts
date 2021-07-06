export class Comissao {
	private nomeVendedor: string;
	private vendas: number;
	
	constructor(nomeVendedor: string, vendas: number) {
		this.nomeVendedor = nomeVendedor;
		this.vendas = vendas;
	}
	
	public valorComissao(): number {
		let retorno1: number = 5000 * 0.05;
		let retorno2: number = 2000 * 0.1;
	
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
	}
	
	public mostraSalario(): void {
		console.log(`Valor ganho: R$ ${1100 + this.valorComissao()}`);
	}
}
