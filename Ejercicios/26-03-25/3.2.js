function calcularVocales(texto){
    cantidad_a = 0;
    cantidad_e = 0;
    cantidad_i = 0;
    cantidad_o = 0;
    cantidad_u = 0;
    texto_mayuscula = texto.toUpperCase()
    for (let i = 0; i < texto.length; i++) {
        const letra = texto_mayuscula[i];
        switch(letra){
            case "A":
                cantidad_a +=1
                break;
            case "E":
                cantidad_e +=1
                break;
            case "I":
                cantidad_i +=1
                break;
            case "O":
                cantidad_o +=1
                break;
            case "U":
                cantidad_u +=1
                break;
        }
    }
    console.log("Cantidad de A: "+cantidad_a);
    console.log("Cantidad de E: "+cantidad_e);
    console.log("Cantidad de I: "+cantidad_i);
    console.log("Cantidad de O: "+cantidad_o);
    console.log("Cantidad de U: "+cantidad_u);
}
calcularVocales("Franco")