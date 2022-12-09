function PontodeOnibus(paradas){
    let passageirosEntram = []
    let passageirosSaem = []
    let passageirosFinal = 0

    paradas.forEach(passageiros => {
        passageirosEntram.push(passageiros[0])
        passageirosSaem.push(passageiros[1])
    });

    let somaPassageirosEntram = 0
    for (let i = 0; i < passageirosEntram.length; i++) {
        somaPassageirosEntram += passageirosEntram[i]
    }

    let somaPassageirosSaem = 0
    for (let i = 0; i < passageirosSaem.length; i++) {
        somaPassageirosSaem += passageirosSaem[i]
    }

    passageirosFinal = somaPassageirosEntram - somaPassageirosSaem

    return passageirosFinal
}

PontodeOnibus([[5,0], [10, 3], [3,7], [5,3]])
