import {concatAndReverseString} from './manejo-strings.js'
let c1 = "Escuela"
let c2 = "ORT"
console.log(`Cadena 1: ${c1} y Cadena 2: ${c2}`)
console.log(`Cadena invertida: ${concatAndReverseString(c1,c2)}`)

import {PI,suma,resta,multiplicar,division} from './matematica.js'

let n1 = 10
let n2 = 5
console.log(`El valor de PI es ${PI}`)
console.log(suma(n1,n2))
console.log(resta(n1,n2))
console.log(multiplicar(n1,n2))
console.log(division(n1,n2))

import { Alumno } from './Alumno.js'
const alumno1 = new Alumno("Lean Galanterni", 24345543)
const alumno2 = new Alumno("Lautaro Kaliszczak", 46916288)
alumno1.mostrar()
alumno2.mostrar()

import { copiar } from './copyFile.js'

copiar("prueba1.txt","prueba2.txt")

import { buscarMoneda } from './country-to-currency.js'

buscarMoneda('AR')