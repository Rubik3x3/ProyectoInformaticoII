/*
6. Función para encontrar el número más grande en un arreglo
Crea una función llamada numeroMayor que reciba un arreglo de números y retorne el número más grande.
*/

function numeroMayor(array_numeros) {
    numeroMayor = 0;
    for (let i = 0; i < array_numeros.length; i++) {
      const numero = array_numeros[i];
      if (i == 0) {
        numeroMayor = numero;
      }
      if (numeroMayor < numero) {
        numeroMayor = numero;
      }
    }
    return numeroMayor;
  }

  console.log(numMayor([19, 205, -120, 127, 202]));
  