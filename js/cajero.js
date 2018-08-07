// Obtención de Elementos
let inputClave = document.getElementById('clave')
let buttonClave = document.getElementById('aceptClave')

let operacionDiv = document.getElementById('operacionDiv')
// las propiedades de operation tienes mucha identación
let operation = {
    consulta: document.getElementById('selecConsulta'),
    retiro: document.getElementById('selecRetiro')
}
let buttonContinuar = document.getElementById('continue')

let montoDiv = document. getElementById('montoDiv')
let monto = document.getElementById('monto')
let buttonMonto = document.getElementById('aceptMonto')

let cuentaDiv = document.getElementById('cuentaDiv')
// las propiedades de tipoCuenta tienes mucha identación
let tipoCuenta = {
        ahorro: document.getElementById('ahorro'),
        corriente: document.getElementById('corriente')
}
let buttonNext = document.getElementById('next')

let cedulaDiv = document.getElementById('cedulaDiv')
let inputCedula = document.getElementById('cedula')
let buttonCedula = document.getElementById('aceptCedula')

let textFinal = document.getElementById('exitosaDiv')

// Escuchadores de Evento 
buttonClave.addEventListener('click', function () {
    // Porque tiene identacación de mas!? >.<
    if (inputClave.value == '') {
            alert("Ingresa tu cédula")
            return
    }
        operacionDiv.classList = ["show"]
}) 
buttonContinuar.addEventListener('click', function () {
    if (!operation.consulta.checked & !operation.retiro.checked) {
        alert("Selecciona el tipo de operación que vayas a realizar")
        return
    }
    // Identación de mas | checked no es un texto para ponerle == '' recuerda que su valor siempre es true o false
    if (operation.consulta.checked == '') {
            montoDiv.classList = ["show"] 
    }
    if (operation.retiro.checked == '') {
            montoDiv.classList = ["hide"]
            cuentaDiv.classList = ["show"]
    }
})
buttonMonto.addEventListener('click', function () {
    if (monto.value == '') {
        alert('Ingresa un monto')
        return
    }
    cuentaDiv.classList = ["show"]
})
buttonNext.addEventListener('click', function () {
    if (!tipoCuenta.ahorro.checked & !tipoCuenta.corriente.checked) {
        alert('Selecciona el tipo de cuenta')
        return
    }
    cedulaDiv.classList = ["show"]
})
buttonCedula.addEventListener('click', function () {
    // IDENTACIÓN
    if (inputCedula.value == '') {
            alert('Ingresa los dos primeros dígitos de tu cédula')
            return
    }
    textFinal.classList = ["show"]
})