// Obtención de Elementos
const inputClave = document.getElementById('clave')
const claveDiv = document.getElementById('claveDiv')
const buttonClave = document.getElementById('aceptClave')

const buttonContinuar = document.getElementById('continue')
const operacionDiv = document.getElementById('operacionDiv')
const operation = {
    consulta: document.getElementById('selecConsulta'),
    retiro: document.getElementById('selecRetiro')
}

const montoDiv = document. getElementById('montoDiv')
const monto = document.getElementById('monto')
const buttonMonto = document.getElementById('aceptMonto')

const buttonNext = document.getElementById('next')
const cuentaDiv = document.getElementById('cuentaDiv')
const tipoCuenta = {
    ahorro: document.getElementById('ahorro'),
    corriente: document.getElementById('corriente')
}

const cedulaDiv = document.getElementById('cedulaDiv')
const inputCedula = document.getElementById('cedula')
const buttonCedula = document.getElementById('aceptCedula')

const textFinal = document.getElementById('exitosaDiv')

// Escuchadores de Evento 
buttonClave.addEventListener('click', function () {
    if (inputClave.value) {
        alert("Ingrese su clave")
        return
    }

    operacionDiv.classList = ["show"]
}) 

buttonContinuar.addEventListener('click', function () {
    if (!operation.consulta.checked & !operation.retiro.checked) {
        alert("Selecciona el tipo de operación que vayas a realizar")
        return
    }
    
    if (operation.consulta.checked) {
        montoDiv.classList = ["show"]
    }

    if (operation.retiro.checked) {
        montoDiv.classList = ["hide"]
        cuentaDiv.classList = ["show"]
    }
})

buttonMonto.addEventListener('click', function () {
    if (monto.value) {
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
    if (inputCedula.value) {
        alert('Ingresa los dos primeros dígitos de tu cédula')
        return
    }

    claveDiv.classList = ["hide"]
    operacionDiv.classList = ["hide"]
    montoDiv.classList = ["hide"]
    cuentaDiv.classList = ["hide"]
    cedulaDiv.classList = ["hide"]
    textFinal.classList = ["show"]
})