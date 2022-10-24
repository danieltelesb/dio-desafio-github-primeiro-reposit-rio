
/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilometro rodado.
    Crie um método que dado a quantidade de quilometros e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.
*/

class carro {
    marca;
    cor;  
    gastoMedioPorKm;

    constructor (marca,cor,gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    
    calcularGastoDePercurso(distancia,precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new carro('Fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));
const sentra = new carro('Nissan', 'Prata', 1 / 6.3);
console.log(sentra.calcularGastoDePercurso(70, 5));
