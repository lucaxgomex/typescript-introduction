import { VariacaoCovid } from "./variancia";

namespace Variancia {
	let ObjetoCovid = new VariacaoCovid(1.23, 56.89);
	
	console.log(`Valor da porcentagem: ${(ObjetoCovid.calculaVariacao() * 100).toFixed(2)}%`);
	console.log(`${ObjetoCovid.classificacao()}`);
}

