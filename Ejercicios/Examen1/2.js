/*

🧩 Ejercicio 2: Validación de Emails y Contraseñas (sin funciones prototipo)
USAR LA FUNCION CREADA ANTERIORMENTE
Consigna:

Dada una lista de objetos que representan usuarios, cada uno con una propiedad email y una password, se te pide:

    Verificar si cada email es válido, siguiendo estas reglas:

        Debe tener exactamente un carácter @.

        Debe tener al menos un . después del @.

        No puede comenzar ni terminar con @ ni con ..
       
        Tampoco puede terminar con un caracter especial

    Verificar si cada contraseña es válida. Una contraseña es válida si:

        Tiene al menos 8 caracteres.

        Contiene al menos una letra y al menos un número.
       
        Si contiene al menos una letra mayuscula o minuscula

Restricciones:

    ❌ No podés usar funciones de prototipo como .includes, .split, .length, .match, .filter, etc.

    ✅ Podés usar bucles, condiciones, estructuras de control y acceso por índice.

Ejemplo de estructura de entrada:

const usuarios = [
  { email: "juan@example.com", password: "abc12345" },
  { email: "mal@correo", password: "1234567" },
  { email: "@nada.com", password: "abcd" }
];
*/

const { contarElementos } = require('./1');

const length = contarElementos;

function esLetra(caracter){
    let arrayLetras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for (let i = 0; i < length(arrayLetras); i++){
        if(caracter === arrayLetras[i]){
            return true;
        }
    }
    return false;
}

function esNumero(caracter){
    let arrayNumeros = ["0","1","2","3","4","5","6","7","8","9"];
    for (let i = 0; i < length(arrayNumeros); i++){
        if(caracter === arrayNumeros[i]){
            return true;
        }
    }
    return false;
}

function split(string, separador){
    let array = [];
    let string_separado = "";
    let contadorArray = 0;
    for (let i = 0; i < length(string); i++){
        const caracter = string[i];
        if(caracter === separador){
            array[contadorArray] = string_separado;
            string_separado = "";
            contadorArray++;
        }else{
            string_separado += caracter;
        }
    }
    array[contadorArray] = string_separado;
    return array;
}

function includes(array, elemento){
    for (let i = 0; i < length(array); i++){
        if(array[i] === elemento){
            return true;
        }
    }
    return false;
}

function validarEmail(email){
    const lengthEmail = length(email);
    const email_separado = split(email,"@");

    if (length(email_separado) < 2) {
        console.log("---- [X] No hay 2 partes separadas por @.");
        return false;
    }

    if (length(email_separado) > 2) {
        console.log("---- [X] Tiene más de un '@'.");
        return false;
    }

    const email_parte1 = email_separado[0];
    const email_parte2 = email_separado[1];

    if (email[0] === '@' || email[0] === '.' || esLetra(email[lengthEmail - 1]) === false) {
        console.log("---- [X] Tiene @ o . al comienzo o final (o al final un caracter especial).");
        return false;
    }
    if(includes(email_parte2,".") === false){
        console.log("---- [X] No tiene '.' después del arroba.");
        return false;
    }
    return true;
}

function validarPassword(password){
    let tieneLetra = false;
    let tieneNumero = false;

    if(length(password) < 8){
        console.log("---- [X] Tiene menos de 8 caracteres.");
        return false;
    }
    
    for (let i = 0; i < length(password); i++){
        const caracter = password[i];
        if(esLetra(caracter) === true){
            tieneLetra = true;
        }
        if(esNumero(caracter) === true){
            tieneNumero = true;
        }
    }

    if (!tieneLetra || !tieneNumero) {
        console.log("---- [X] No contiene al menos una letra y un número.");
        return false;
    }

    return true;
}

function validarEmailPassword(array){
    const longitudArray = length(array);
    for (let i = 0; i < longitudArray; i++) {
        
        const usuario = array[i];
        const email = usuario.email;
        const password = usuario.password

        console.log(`Email: ${email}:`);
        if(validarEmail(email) === true){
            console.log("-- [VERIFICADO] Email verificado.");
        }else{
            console.log("-- [INVALIDO] Email NO verificado.");
        }

        console.log(`Password: ${password}:`)
        if(validarPassword(password) === true){
            console.log("-- [VERIFICADO] Contraseña verificada.");
        }else{
            console.log("-- [INVALIDO] Cotnraseña NO verificada.");
        }

        console.log("");
    }
}

const usuarios = [
    { email: "usuario@example.com", password: "clave123" },      // válido
    { email: "malcorreo.com", password: "abc12345" },             // sin @
    { email: "mal@@ejemplo.com", password: "abc12345" },          // dos @
    { email: ".usuario@ejemplo.com", password: "abc12345" },      // . al principio
    { email: "usuario@ejemplo.com.", password: "abc12345" },      // . al final
    { email: "usuario@ejemplo", password: "abc12345" },           // sin . luego del @
    { email: "usuario@example.com", password: "12345678" },       // sin letras
    { email: "usuario@example.com", password: "abcdefgh" },       // sin números
    { email: "usuario@example.com", password: "abc1" },           // menos de 8 caracteres
];


validarEmailPassword(usuarios);
