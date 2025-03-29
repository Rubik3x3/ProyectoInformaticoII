function push(array,elemento){
    array[array.length] = elemento;
    return array;
}

a = [1,2,3]
console.log(a);
console.log(push(a,4));
console.log(push(a,5));

