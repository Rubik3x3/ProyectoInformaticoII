/*
1. Función para determinar si un número es par o impar
Crea una función llamada esPar que reciba un número como argumento 
y retorne true si el número es par o false si es impar.
*/

function esPar(numero)
{
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(esPar(11));