
function puedeVotar(edad){
    if (edad >= 18) {
        return "Debe votar";
    }
    else if (edad >= 16 && edad <= 17) {
        return "Puede votar";
    }
    else {
        return "No puede votar";
    }
}

lista = [2,15,18,23,-1,63]

for (let i = 0; i < lista.length; i++) {
    const numero = lista[i];
    console.log("Edad: "+lista[i]+" "+puedeVotar(lista[i]));
}