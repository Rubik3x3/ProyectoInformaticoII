class Calculadora{
    constructor(n1,n2){
        this.n1 = n1;
        this.n2 = n2;
    }

    suma(){
        return this.n1+this.n2;
    }
    resta(){
        return this.n1-this.n2;
    }
    multiplicacion(){
        return this.n1*this.n2;
    }
    division(){
        return this.n1/this.n2;
    }
}

const calc1 = new Calculadora(10,20)
console.log(calc1.suma());
console.log(calc1.resta());
console.log(calc1.multiplicacion());
console.log(calc1.division());
