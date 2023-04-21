import {concatAndReverseString} from './manejo-strings.js'
console.log("EJ 01: ");
let c1 = "Escuela"
let c2 = "ORT"
console.log(`Cadena 1: ${c1} y Cadena 2: ${c2}`)
console.log(`Cadena invertida: ${concatAndReverseString(c1,c2)}`)


import {PI,suma,resta,multiplicar,division} from './matematica.js'
console.log("EJ 02: ");
let n1 = 10
let n2 = 5
console.log(`El valor de PI es ${PI}`)
console.log(suma(n1,n2))
console.log(resta(n1,n2))
console.log(multiplicar(n1,n2))
console.log(division(n1,n2))


import { Alumno } from './Alumno.js'
console.log("EJ 03: ");
const alumno1 = new Alumno("Lean Galanterni", 24345543)
const alumno2 = new Alumno("Lautaro Kaliszczak", 46916288)
alumno1.mostrar()
alumno2.mostrar()

import { copiar } from './copyFile.js'
copiar("prueba1.txt","prueba2.txt")

import { buscarMoneda } from './country-to-currency.js'
console.log("EJ 07: ");

buscarMoneda('AR')

import config from './dbconfig.js';
import sql from 'mssql';

console.log("EJ sql Select: ")
let pool = await sql.connect(config);
let result = await pool.request().query("SELECT * from Pizzas");

console.log(result.recordsets.length)
console.log(result.recordsets[0].length)

import {getById} from './pizzaServices.js'
console.log(getById(5))