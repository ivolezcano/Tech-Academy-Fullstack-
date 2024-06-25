// 3.- Cuenta cuantas veces se repite un caracter en especifico (20 ptos).

// Definir la cadena de texto
let cadenaIngresada = prompt('Ingrese una cadena de texto: ')

// Definir el caracter dado 
let caracter = prompt('Ingrese un caracter para saber si se repite: ')

function eliminarEspacios(str){
    //Funcion que elimina los posibles espacios ingresados por el usuario. 
    let res = str.replace(/ /g, '');

    return res
}

function contador(cadena){
    //Funcion que cuenta la cantidad de veces que se repite un caracter en especifico.
    let res = 0
    for (let i = 0; i < cadena.length; i++){
        let indiceCadena = cadena[i]
        if (indiceCadena == caracter){
            res++
        }
    }
    return res
}


function main() {
    let sinEspacio = eliminarEspacios(cadenaIngresada)
    let respuesta = contador(sinEspacio)
    console.log(respuesta)
}

main();