// 1.- Random par o impar(10 ptos).

function randomCreate(){
    // Funcion que crea numeros randoms. 
    num = parseInt(Math.random()*100)
    return num
}

function verification(num){
    // Funcion que verifica si el numero es par o impar. 
    if (num % 2 == 0){
        return "El numero es par"
    } else{
        return "El numero es impar"
    }
}

for (let i = 0; i < 5; i++){
    // Ciclo que itera 5 veces en el que crea numeros distintos y verifica que sea par o impar.
    num = randomCreate()
    res = verification(num)
    render = `El numero ${num} es ${res}`
    console.log(render)
}
