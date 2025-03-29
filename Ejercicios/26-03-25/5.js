/*
5. Función para generar la secuencia de Fibonacci
Crea una función llamada fibonacci que reciba un número n y retorne un 
arreglo con los primeros n números de la secuencia de Fibonacci.
*/

function fibonacci(n) {
    array_fibo = [];
    for (let i = 0; i < n; i++) {
      if (i === 0 || i === 1) {
        array_fibo[i] = 1;
      } else {
        array_fibo[i] = array_fibo[i - 1] + array_fibo[i - 2];
      }
    }
    return array_fibo;
  }
  
  console.log(fibonacci(10));
  