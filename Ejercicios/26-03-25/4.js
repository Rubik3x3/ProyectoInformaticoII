/*
4. Función para verificar si una palabra es un palíndromo
Crea una función llamada esPalindromo que reciba una cadena de texto 
y retorne true si es un palíndromo o false en caso contrario.
*/

function invertirCadena(texto){
  let texto_invertido = "";
  for (let i = texto.length-1; i >= 0; i--) {
      const letra = texto[i];
      texto_invertido += letra;
  }
  return texto_invertido;
}

function esPalindromo(texto){
  if(texto===invertirCadena(texto)){
    return true;
  }else{
    return false;
  }
}
/*
Ya sé que funciona solo si toda la palabra
está en mayuscula o minúscula pero sino tenía que
usar la función toUpperCase o toLowerCase
*/
console.log(esPalindromo("neuquen")); 
console.log(esPalindromo("ana")); 
console.log(esPalindromo("gato"));

