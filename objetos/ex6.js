function propriedadesCarros(carros, propriedadesCarros){
    const propriedadesEscolhidas = carros.reduce(function (accumulator, current){
        //FOR EACH PARA PERCORRER AS PROPRIEDADES E CRIAR UM OBJETO COM A CHAVE E O VALOR CORRETOS
        let propriedades = {}
        propriedadesCarros.forEach(propriedade => {
            propriedades[propriedade] = current[propriedade]
        });

        accumulator.push(propriedades)

        return accumulator
    }, [])
    return propriedadesEscolhidas
}

// propriedadesCarros([
// {marca: 'Fiat', ano: 2021, cor: 'preto'}, 
// {marca: 'BMW', ano: 2021, cor: 'preto'}, 
// {marca: 'Ford', ano: 2021, cor: 'preto'}, 
// {marca: 'BMW', ano: 2016, cor: 'vermelho'}
// ], 
// ['marca', 'ano'])

console.log(propriedadesCarros([
    {marca: 'Fiat', ano: 2021, cor: 'preto'}, 
    {marca: 'BMW', ano: 2021, cor: 'preto'}, 
    {marca: 'Ford', ano: 2021, cor: 'preto'}, 
    {marca: 'BMW', ano: 2016, cor: 'vermelho'}
    ], 
    ['marca', 'ano']))