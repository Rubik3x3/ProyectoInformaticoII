/*
¿Puede votar?
Crear un programa en JS que solicite la edad de una persona (valor en una variable)
y, utilizando la estructura condicional if, detemine:
a) Si la persona tiene 18 años o más, debe mostrar por consola: "debe votar"
b) Si la persona tiene entre 16 y 17 años inclusive, debe mostrar por consola: "puede votar"
c) Si la persona tiene menos de 16 años, debe mostrar por consola: "no puede votar"
*/

let edad = 13;
if (edad >= 18) {
    console.log("Debe votar");
}
else if (edad >= 16 && edad <= 17) {
    console.log("Puede votar");
}
else {
    console.log("No puede votar");
}
