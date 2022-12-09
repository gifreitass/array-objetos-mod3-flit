function PontodeOnibus(paradas){
    let passageirosEntram = 0
    let passageirosSaem = 0
    let passageirosFinal = 0

    paradas.forEach(passageiros => {
    passageirosEntram += passageiros[0]
    passageirosSaem += passageiros[1]
    });

    passageirosFinal = passageirosEntram - passageirosSaem

    console.log(passageirosFinal)

    return passageirosFinal
}

PontodeOnibus([[5,0], [10, 3], [3,7], [5,3]])
