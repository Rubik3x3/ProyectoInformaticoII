var letras = "hola"
var b = true
var num = 10
var dec = 4.3
var array = [1,2,3,4]
var obj = {
    nombre: "asd",
    apellido: "asd"
}


// Mostrar todos los numeros pares desde el 1 hasta el 100

for (let i = 1; i <= 100; i++)
    {
        if(i%2 == 0)
            {
                //console.log(i)
            }
    }

for (let i = 1; i <= 100; i=i+2)
    {
        //console.log(i)
    }


function calcularResto(numero,divisor)
{   let resto = numero;
    while(resto >= divisor)
        {
            resto -= divisor;
        }
    return resto;
}

// console.log(calcularResto(11,3));

for(let i = 1; i <= 100; i++)
    {
        if(calcularResto(i,2) === 0)
            {
                console.log(i);
            }
    }
