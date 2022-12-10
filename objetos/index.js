const submit = document.getElementById('submit')

const brand = document.getElementById('brand')
const year = document.getElementById('year')
const price = document.getElementById('price')
const color = document.getElementById('color')
const automatic = document.getElementById('automatic')

//SALVAR OS VALORES DOS INPUTS EM UM OBJETO
function submitForm(){
    let carros = {}

    carros.marca = brand.value
    carros.ano = year.value
    carros.valor = price.value
    carros.cor = color.value
    carros.automatico = automatic.value
    // console.log(carros)
    updateCarrosLocalStorage(carros)
}

//SALVAR O OBJETO NO LOCAL STORAGE
function updateCarrosLocalStorage(carrosObj){
    window.localStorage.setItem('carro', JSON.stringify(carrosObj))
}

submit.addEventListener('click', submitForm)

//PEGAR DO LOCAL STORAGE E EXIBIR NO CONSOLE
function getCarrosLocalStorage(){
    let carrosString = localStorage.getItem('carro')
    let carrosObj = JSON.parse(carrosString)

    console.log(carrosObj)
}

window.addEventListener('load', getCarrosLocalStorage)

