import fs from 'fs'

export function copiar(source,destination) {
  fs.readFile(source,'utf8',(error,data)=> {
    if(error) throw error;
    fs.writeFile(destination,data,(error) => {
      if (error) throw error;
      console.log(`EJ 04:\n${source} ha sido copiado con exito en ${destination}`)
    })
  })
}