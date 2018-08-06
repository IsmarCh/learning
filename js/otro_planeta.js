// Obtención de elementos
var buttonMarte = document.getElementById('Marte')
var buttonJupiter = document.getElementById('Jupiter')
var results = document.getElementById('Respuesta')
var peso = document.getElementById('Peso')

// Valor de Gravedades
const G_MARTE = 3.7
const G_JUPITER = 27.9
const G_TIERRA = 9.8

/* Función de convertir Gravedad
function convertirGravedad (gravedadDelPlaneta) {
	return gravedadDelPlaneta * peso.value / G_TIERRA
}
*/

// Aún no te preocupes :wink:
const convertirGravedadV2 = gravedadDelPlaneta => gravedadDelPlaneta * peso.value / G_TIERRA

// Añadir los eventos
buttonMarte.addEventListener('click', function activeMarte () {
	var resultado = convertirGravedadV2(G_MARTE)
	alert('Tu peso en Marte es: ' + parseInt(resultado) + 'kg')
})

buttonJupiter.addEventListener('click', function activeJupiter () {
	var resultado = convertirGravedadV2(G_JUPITER)
	alert('Tu peso en Júpiter es: ' + parseInt(resultado) + 'kg')
})
