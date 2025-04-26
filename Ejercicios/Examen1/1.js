/*
🧩 Ejercicio 1: Contar caracteres de una cadena o elementos de un arreglo (emular .length)
Consigna:

Implementá una función llamada contarElementos que reciba como parámetro una cadena de texto o un arreglo y devuelva la cantidad de caracteres o elementos que contiene.

Restricciones:

    ❌ No podés usar .length ni ninguna función que lo utilice internamente.

    ✅ Tenés que usar un bucle while o for y acceso por índice para contar.

Ejemplos esperados:

contarElementos("Hola mundo"); // 10
contarElementos([1, 2, 3]);    // 3
contarElementos("");           // 0
contarElementos([]);           // 0
*/
function contarElementos(array){
    let count = 0;
    while(array[count] != undefined){
        count++;
    }
    return count;
}

module.exports = {
    contarElementos,
}