var buttonM = document.getElementById('pesoM')
var buttonJ = document.getElementById('pesoJ')
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

buttonM.addEventListener('click', calcularPeso.bind(null, 'pesoM'))
buttonJ.addEventListener('click', calcularPeso.bind(null, 'pesoJ'))