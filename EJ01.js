let c1 = "Escuela"
let c2 = "ORT"
console.log("Cadena 1: "+ c1 + " Cadena 2: " + c2)
let cadenaCompleta=c1.concat(c2)
console.log("Cadenas concatenadas: "+cadenaCompleta)
console.log("Cadena invertida: "+ reverseString(cadenaCompleta))
function reverseString(cadenaCompleta) {
    let cadenaReverse = "";
 
    for (let i = cadenaCompleta.length - 1; i >= 0; i--) { 
        cadenaReverse += cadenaCompleta[i];
    }
    return cadenaReverse;
}

