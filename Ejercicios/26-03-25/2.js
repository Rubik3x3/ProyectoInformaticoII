/*
2. Función para invertir una cadena de texto
Crea una función llamada invertirTexto que reciba una 
cadena de texto y retorne la cadena invertida.
*/

function invertirCadena(texto){
    let texto_invertido = "";
    for (let i = texto.length-1; i >= 0; i--) {
        const letra = texto[i];
        texto_invertido += letra;
    }
    return texto_invertido;
}

console.log(invertirCadena("Talarico"))