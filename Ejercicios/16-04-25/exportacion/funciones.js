var suma = (n1,n2) => n1 + n2;

var resta = (n1,n2) => n1 - n2;

var multiplicacion = (n1,n2) => n1 * n2;

var division = (n1,n2) => n1 / n2;

function sumarArray(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        const numero = array[i]        
        suma+=numero;
    }
    return suma;
}

var sumarArrayAF = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        const numero = array[i]        
        suma+=numero;
    }
    return suma;
}

module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    sumarArray,
    sumarArrayAF,
}