function bingo(numeros){
    let numerosBingo = [2, 9, 14, 7, 15]
    
    for (let i = 0; i < numerosBingo.length; i++) {
        let numerosCorretos = numerosBingo[i];
        if(!numeros.includes(numerosCorretos)){
            return 'PERDEU'
        }  
    }
    return 'GANHOU'  
}

bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]) 