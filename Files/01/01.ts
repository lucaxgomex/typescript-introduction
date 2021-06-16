namespace DefineColecao {
    interface Iteravel<Tipo> {
        a: Array<Tipo>;
        proximo(i: number): Tipo;
        atual(i: number): Tipo;
        isPrimeiro(i: number): boolean;
        isUltimo(i: number): boolean;
        irParaPrimeiro(): Tipo;
    }

    class CriaMetodos<Tipo> implements Iteravel<Tipo> {
        a: Array<Tipo>;

        constructor([]: Iterable<Tipo>) {
            this.a = [];
        }

        proximo(i: number): Tipo { 
            return this.a[i + 1];
        }

        atual(i: number): Tipo {
            return this.a[i];
        }

        isPrimeiro(i: number): boolean {
            return i == 0;
        }

        isUltimo(i: number): boolean {
            return i != 0;
        }
        
        irParaPrimeiro(): Tipo {
        	return this.a[0];
        }
    }

    class ColecaoArray<Tipo> extends CriaMetodos<Tipo> {
        adiciona(values: Tipo) {
            this.a.push(values);
        }
    }

    let colecao = new ColecaoArray<number>([]);

    colecao.adiciona(1);
    colecao.adiciona(2);
    colecao.adiciona(3);
    colecao.adiciona(4);
    colecao.adiciona(5);

    console.log(`Proximo valor => ${colecao.proximo(1)}`);
    console.log(`Valor atual => ${colecao.atual(1)}`);
    console.log(`Primeiro => ${colecao.isPrimeiro(1)}`);
    console.log(`Segundo => ${colecao.isUltimo(1)}`);
    console.log(`Ir para o primeiro => ${colecao.irParaPrimeiro()}`);
}
  
