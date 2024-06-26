// 4.- Invertir un array (10 ptos).

let array = [23,5,34,'Hola',98,'cadena',7];


function invertirArray(str){
    // Funcion que toma un array y los agrega de forma invertida a un nuevo array. 
    let res = []
    for (let i = 0; i <= str.length; i ++){
        let indice = str.length - i
        if (str[indice] == undefined){
            continue
        }else{
            res.push(str[indice])
        }
    }
    return res
}

function formato(str){
    // Funcion que toma un array y si uno de los elementos es string le agrega comillas para diferenciarlo de los otros tipos de datos. 
    return str.map(item => typeof item === 'string' ? `"${item}"`: item).join(', ')

}

function main(){
    let arrayOriginal = formato(array)
    console.log(`Arreglo original: [${arrayOriginal}]`)
    let invertir = invertirArray(array)
    invertir = formato(invertir)
    console.log(`Arreglo invertido: [${invertir}]`)
}
main()