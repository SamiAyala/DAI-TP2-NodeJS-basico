const fs = require('fs')

fs.writeFile('./prueba1.txt','linea1\nlinea2\n', error => {
    if(error){
        console.log("Error",error)
    }
    else {
        console.log("archivo creado")
    }
})
console.log("Ultima? Linea")