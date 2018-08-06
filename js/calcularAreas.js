// Obtención de elementos
const circulo = document.getElementById('circle')
const triangulo = document.getElementById('triangle')
const cuadrado = document.getElementById('square')
const result = document.getElementById('resultados')

const triangleDiv = document.getElementById('triangleDiv')
const triangleBase = document.getElementById('triangleBase')
const alturaTriangle = document.getElementById('alturaTriangle')
const sendTriangle = document.getElementById('sendTriangle')

const squareDiv = document.getElementById('squareDiv')
const squareSide = document.getElementById('squareSide')
const sendSquare = document.getElementById('sendSquare')

const circleDiv = document.getElementById('circleDiv')
const circleRadio = document.getElementById('circleRadio')
const sendCircle = document.getElementById('sendCircle')



// Declaración de funciones que calculan las áreas
const areaTriangle = (base, area) => (base * area) / 2
const areaSquare = lados => lados ** 2
const areaCircle = radio => (radio ** 2) * Math.PI

// Escuchadores de eventos para activar los divs
circulo.addEventListener('click', function () {
	circleDiv.classList = ["show"]
})

triangulo.addEventListener('click', function () {
	triangleDiv.classList = ["show"]
})

cuadrado.addEventListener('click', function () {
	squareDiv.classList = ["show"]
})

// Escuchadores de eventos para mostrar resultados
sendCircle.addEventListener('click', function () {
	let radio = circleRadio.value

	result.innerText = parseInt(areaCircle(radio))
})
sendTriangle.addEventListener('click', function () {
 	let base = triangleBase.value 
 	let area = alturaTriangle.value

 	result.innerText = parseInt(areaTriangle(base, area))
 })
sendSquare.addEventListener('click', function () {
	let lados = squareSide.value 

	result.innerText = parseInt(areaSquare(lados))
})

// sendCircle.addEventListener('click', () => result.innerText = parseInt(areaCircle(circleRadio.value)))