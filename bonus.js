// Ejercicio bonus - Convertir caracteres a mayúsculas. (15 ptos).

let cadena = 'www//rt:.Honeypot.com'

function convertir(cadena){
    /*Funcion que identifica el indice de donde se encuentra el punto
    para luego dividirlos en substring y dividir la parte que va en mayuscula y la que va en minuscula
    */
    let index = cadena.indexOf('.')
    
    let previo = cadena.substring(0, index)
    let post = cadena.substring(index)

    let mayuscula = previo.toUpperCase()
    let minuscula = post.toLowerCase()

    let resultado = mayuscula + minuscula

    return resultado
}

function main(){
    let entrada = `Entrada: ${cadena}`
    console.log(entrada)
    let salida = `Salida: ${convertir(cadena)}`
    console.log(salida)
}

main()