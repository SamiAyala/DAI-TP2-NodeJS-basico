
export function concatAndReverseString(c1,c2) {
    let string =c1.concat(c2)
    const concatstr = string;
    return concatstr.split('').reverse().join('')
}
