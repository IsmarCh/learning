// Obtención de elementos 
let datePeso = document.getElementById('datePeso')
let buttonJupiter = document.getElementById('jupiter')
let buttonMarte = document.getElementById('marte')
let results = document.getElementById('resultado')

// Declaración de constantes
const G_MARTE = 6.8
const G_JUPITER = 28.7
const G_TIERRA = 9.8

// Función de cálculo
const calculo = planeta => planeta * datePeso.value / G_TIERRA

// Esuchadores de eventos 
buttonMarte.addEventListener('click', function activeM () {
	var resultadoM = calculo(G_MARTE)
	var mensajeF = 'Tu peso en Marte es: ' + parseInt(resultadoM) + 'kg'

		results.innerText = mensajeF
})

buttonJupiter.addEventListener('click', function activeJ () {
	var resultadoJ = calculo(G_JUPITER)
	var mensajeF = 'Tu peso en Júpiter es: ' + parseInt(resultadoJ) + 'kg'

	results.innerText = mensajeF
})