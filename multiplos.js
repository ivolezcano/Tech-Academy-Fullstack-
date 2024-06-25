// 2.- Múltiplos de un número dado (10 ptos).

// Variable del numero dado
let num = 2
let res = ''

for (let i = 1; num*i < 100 ; i++ ){
    //Ciclo que va modificando la variable res multiplicando por el index el numero dado
    if (num * i < 100 - num){
        res += num * i + ', '
    } else {
        res += num * i + '. '
    }
}

console.log(res)