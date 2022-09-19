const { expect } = require("chai");
const sinon = require("sinon");

describe("index.js", () => {
  
  it("1. La funcion suma devuelve la suma de dos numeros dados", () => {
    expect(suma(1,5)).to.eql(6);
  });

  it("2. La funcion resta devuelve la resta de dos numeros dados", () => {
    expect(resta(12,5)).to.eql(7);
  });

  it("3. La funcion numeroAleatorio devuelve un numero aleatorio entre dos numeros dados", () => {

    expect(numeroAleatorio(0,2)).to.be.lessThanOrEqual(2)
    expect(numeroAleatorio(0,2)).to.be.greaterThanOrEqual(0)
    expect(numeroAleatorio(100,120)).to.be.lessThanOrEqual(120)
    expect(numeroAleatorio(100,120)).to.be.greaterThanOrEqual(100)
  });

  it("4. La funcion saludo devuelve 'Hola [nombre]', nombre siendo un string que se pasa como argumento a la funcion", () => {
    expect(saludo("Paco")).to.eql("Hola Paco")
  });




 
});
