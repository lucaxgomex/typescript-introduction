interface FiguraGeometrica {
    valor: number;
    quantidade: number;
    //calculaArea(): void;
    calculaPerimetro(): void;
}
 
class Figura implements FiguraGeometrica {
    //const objeto: FiguraGeometrica;
 
    valor: number;
    quantidade: number;
 
    constructor(x: number, y: number) {
        this.valor = x;
        this.quantidade = y;
    }
 
    calculaPerimetro() {
        console.log(`Valor do perimetro => ${this.valor * this.quantidade}`)
    }
}
 
const Quadrado: Figura = new Figura(12, 4);
Quadrado.calculaPerimetro()
