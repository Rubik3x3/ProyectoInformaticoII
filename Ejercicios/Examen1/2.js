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

const { length } = require('./1');

function esLetra(caracter){
    let arrayLetras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for (let i = 0; i < length(arrayLetras); i++){
        if(caracter === arrayLetras[i]){
            return true;
        }
    }
    return false;
}

function validarEmail(email){
    const lengthEmail = length(email);

    let cantidadArrobas = 0;
    let puntoDespuesDeArroba = false;
    let terminaEnEspecial = false;
    let arrobaOPuntoComienzoFinal = false;

    for (let j = 0; j < lengthEmail; j++) {
        const caracterEmail = email[j];

        if(j === 0 || j === lengthEmail){
            if(caracterEmail === "@" || caracterEmail === "."){
                arrobaOPuntoComienzoFinal = true;
                console.log("---- [X] Tiene @ o . al comienzo o final.");
            }
        }
        if(caracterEmail === "@"){
            if(cantidadArrobas > 1){
                console.log("---- [X] Tiene más de un '@'.");
            }
            cantidadArrobas++;
        }
        if(caracterEmail === "."){
            if(cantidadArrobas >= 1){
                puntoDespuesDeArroba = true;
                console.log("---- [O] Tiene un '.' despues del arroba.")
            }
        }
        if(j === lengthEmail-1){
            if(esLetra(caracterEmail) === false){
                terminaEnEspecial = true;
                console.log("---- [X] Termina en caracter especial.");
            }
        }
    }
    if(cantidadArrobas === 1 && puntoDespuesDeArroba === true && terminaEnEspecial === false && arrobaOPuntoComienzoFinal === false){
        console.log("---- [VERIFICADO] Email verificado.");
        return true;
    }else{
        console.log("---- [INVALIDO] Email NO verificado.");
        return false
    }
}

function validarPassword(password){

}

function validarEmailContrasenia(array){
    const longitudArray = length(array);
    for (let i = 0; i < longitudArray; i++) {
        const usuario = array[i];
        const email = usuario.email;
        const password = usuario.password
        
        const lengthPass = length(password);

        console.log(`Usuario ${i}:`);

        console.log(`-- Email: ${email}:`)
        console.log(validarEmail(email));

        console.log(`-- Password: ${password}:`)
        console.log(validarPassword(password));

        console.log("");
    }
}

const usuarios = [
    { email: "juan@example.com", password: "abc12345" },
    { email: "mal@correo$", password: "1234567" },
    { email: "@nada.com", password: "abcd" },
];

validarEmailContrasenia(usuarios);



