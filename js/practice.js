var buttonMarte = document.getElementById('pesoM')
var buttonJupiter = document.getElementById('pesoJ')
var inputText = document.getElementById('peso')
var respuesta = document.getElementById('Respuesta')

var gTierra = 9.8
var gMarte = 6.7
var gJupiter = 10.8

function calcularPeso (planeta) {
	var datoPeso = inputText.value

	if ( planeta == 'pesoM') {
		var pesof = ( gMarte * datoPeso ) / gTierra
		var mensajeF = 'Tu peso en Marte es: ' + parseInt(pesof) + 'kg'
	}
	else {
	var pesof = ( gJupiter * datoPeso ) / gTierra
	var mensajeF = 'Tu peso en Júpiter es: ' + parseInt(pesof) + 'kg'
	}

	respuesta.innerText = mensajeF
	inputText.value = null
}

buttonMarte.addEventListener('click', calcularPeso.bind(null, 'pesoM'))
buttonJupiter.addEventListener('click', calcularPeso.bind(null, 'pesoJ'))