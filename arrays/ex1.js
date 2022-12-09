function tabuada (number){
    const multiplicationNumber = []
    const multiplicationOtherNumbers = []
    for (let i = 1; i <= 10; i++) {
        multiplicationNumber.push(number * i)
        multiplicationOtherNumbers.push((number + 1) * i)
        multiplicationOtherNumbers.push((number + 2) * i)
    }

    multiplicationOtherNumbers.sort(function(a,b){
        return a-b
    })
}

tabuada(5)
