function marcasDisponiveis(carros){
    let marcaCarros = []
    marcaCarros = carros.map(carro => carro.marca)

    //OU USANDO FOR EACH:
    // carros.forEach(carro => {
    //     marcaCarros.push(carro.marca)
    // });
    // return marcaCarros

    let marcaCarrosUnicos = marcaCarros.filter((marca, index) => {
        //NÃO RETORNA AS REPETIÇÕES, PORQUE COMPARA O INDEX DOS VALORES DO ARRAY COM O INDEX DO LOOP
        return marcaCarros.indexOf(marca) === index
    })

    return marcaCarrosUnicos
}

console.log(marcasDisponiveis([{marca: 'Fiat', ano: 2021, cor: 'preto'}, {marca: 'BMW', ano: 2021, cor: 'preto'}, {marca: 'Ford', ano: 2021, cor: 'preto'}, {marca: 'BMW', ano: 2016, cor: 'vermelho'}]))