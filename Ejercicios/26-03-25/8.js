/*
8. Función para comprobar si dos arreglos son iguales
Crea una función llamada sonIguales que reciba dos arreglos
y retorne true si son iguales (tienen los mismos elementos en 
el mismo orden) o false en caso contrario.
*/

function sonIguales(array1,array2){
    if(array1.length === array2.length){
        for (let i = 0; i < array1.length; i++) {
            if(array1[i] !== array2[i]){
                return false
            }
        }
        return true
    }else{
        return false
    }
}

console.log(sonIguales([1,2,3,4],[1,3,4,5]));
console.log(sonIguales([1,2,3,4],[1,2,3,4]));
