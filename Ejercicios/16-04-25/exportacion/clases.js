
class Auto{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    hola(){
        console.log(this);
    }
}
const fiat = new Auto("fiat","cronos");
fiat.hola()
