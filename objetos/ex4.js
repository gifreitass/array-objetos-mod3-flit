function pesquisaMarcaCarro(carro, marca){
    const arrayMarca = carro.filter(function (marcaCarro) {
        return marcaCarro.marca === marca
    })
    return arrayMarca
}

console.log(pesquisaMarcaCarro([{marca: 'Fiat', ano: 2021, cor: 'preto'}, {marca: 'BMW', ano: 2021, cor: 'preto'}, {marca: 'Ford', ano: 2021, cor: 'preto'}, {marca: 'BMW', ano: 2016, cor: 'vermelho'}], 'BMW'))