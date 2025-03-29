/*
3. Función para contar las vocales en una cadena
Crea una función llamada contarVocales que reciba una cadena 
de texto y retorne el número de vocales que contiene.
*/

function contarVocales(texto){
    let cantidad_vocales = 0;
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if(letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U" || letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
            cantidad_vocales++;
        }
    }
    return cantidad_vocales;
}

console.log(contarVocales("ccaeioucc"));