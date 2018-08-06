// Obtención de elementos
let buttonCircle = document.getElementById('circulo')
let buttonTriangle = document.getElementById('triangulo')
let buttonSquare = document.getElementById('cuadrado')
let text = document.getElementById('texto')
let result = document.getElementById('resultado')

let circleDiv = document.getElementById('circuloDiv')
let triangleDiv = document.getElementById('trianguloDiv')
let squareDiv = document.getElementById('cuadradoDiv') 

let circleRadio = document.getElementById('circuloRadio')
let triangleBase = document.getElementById('trianguloBase')
let triangleAltura = document.getElementById('trianguloAltura')
let squareSide = document.getElementById('cuadradoSide')

// Declaración de variables
const triangleArea = (base, altura) => (base * altura) / 2
const squareArea = lado => lado ** 2
const circleArea = radio => (radio ** 2) * Math.PI

// Escuchadores de Eventos 
buttonCircle.addEventListener('click', function () {
    circleDiv.classList = ["show"]
})
buttonTriangle.addEventListener('click', function () {
    triangleDiv.classList = ["show"]
})
buttonSquare.addEventListener('click', function () {
    squareDiv.classList = ["show"]
})