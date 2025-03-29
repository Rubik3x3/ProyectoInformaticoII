/*
7. Función para eliminar duplicados en un arreglo
Crea una función llamada eliminarDuplicados que reciba un 
arreglo y retorne un nuevo arreglo sin elementos duplicados.
*/

function contieneElemento(array,elemento){
    for (let i = 0; i < array.length; i++) {
        const elemento_array = array[i];
        if(elemento_array == elemento){
            return true;
        }
    }
    return false;
}

function eliminarDuplicados(array){
    let array_sin_repetidos = [];
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        const numero = array[i];
        if(contieneElemento(array_sin_repetidos,numero) == false){
            array_sin_repetidos[contador] = numero;
            contador++;
        }
    }
    return array_sin_repetidos;
}

console.log(eliminarDuplicados([12,3,65,8,12,4,7,2,2,2,2,2,2,3,2,4,2,4]));
