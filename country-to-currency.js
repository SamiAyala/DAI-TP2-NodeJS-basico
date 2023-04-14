import countryToCurrency from 'country-to-currency'

export function buscarMoneda(pais)
{
    let moneda = countryToCurrency[pais]
    moneda != null ? console.log("El nombre de la moneda del pais " + pais + " es: " + moneda) : console.log("No se ha encontrado la moneda");
}