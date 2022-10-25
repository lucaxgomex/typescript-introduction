abstract class FiguraGeometrica {
   quantidadeLado: number = 1
 
   lado1: number = 1
 
   lado2: number = 1
 
   area: number = this.lado1 * this.lado2
 
   perimetro: number = this.lado1 + this.lado2
}
 
class Quadrado extends FiguraGeometrica {
   lado1 = 12
   lado2 = this.lado1
 
   calculaArea(): number {
       return this.area
   }
 
   calculaPerimetro(): number {
       return this.perimetro
   }
}
 
class Triangulo extends FiguraGeometrica {
   lado1 = 12
   lado2 = 6
   lado3: number = 8
 
   calculaArea(): number {
       return this.area / this.lado3
   }
 
   calculaPerimetro(): number {
       return this.perimetro + this.lado3
   }
}
