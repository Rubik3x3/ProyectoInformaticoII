const miAuto = {
    marca: "Fiat",
    modelo: "Argo",
    patente: "ag123ga",
    anio: "2023",

    arrancar(sonido){
        const miSonido = `El auto está haciendo: ${sonido}`;
        return miSonido;
    },

    apagar(){
        return "El auto se apago";
    }
}

//var miAutoSonido = miAuto.arrancar("Rum rum");
var miAutoSonido = miAuto.apagar();
console.log(miAuto.marca);
console.log(miAuto.modelo);
console.log(miAutoSonido);

var a = 50;

var misUsuarios = [
    miAuto,{
        nombre: "Marcos",
        apellido: "Costa"
    }
]

console.log(misUsuarios);

