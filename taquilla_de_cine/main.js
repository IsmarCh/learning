// let buttonMovie1 = document.getElementById('peli1')
// let buttonMovie2 = document.getElementById('peli2')
// let buttonMovie3 = document.getElementById('peli3')
// let actualMovie
// let movies = ['Los Increíbles 2', '50 sombras mas oscuras', '300: El nacimiento de un imperio']
let buy = document.getElementById('comprar')
let name = document.getElementById('nombre')
let age = document.getElementById('edad')
let sex = {
    woman: document.getElementById('mujer'),
    man: document.getElementById('hombre')
}
let movie = {
    button1: document.getElementById('peli1'),
    button2: document.getElementById('peli2'),
    button3: document.getElementById('peli3'),
    actual: null,
    titles: [
        {title: 'Los Increíbles 2', age: 0},
        {title: '50 sombras mas oscuras', age: 17}, 
        {title: '300: El nacimiento de un imperio', age: 15}
    ]
}

movie.button1.addEventListener('click', function () {
    movie.actual = movie.titles[0]
})
movie.button2.addEventListener('click', function () {
    movie.actual = movie.titles[1]
})
movie.button3.addEventListener('click', function () {
    movie.actual = movie.titles[2]
})

buy.addEventListener('click', function () {
    if (movie.actual == null) {
        alert("Selecciona una pelicula")
        return
    }
    
    if (name.value == '') {
        alert("Escribe tu nombre")
        return
    }
    if (age.value == '') {
        alert("Escribe tu edad")
        return
    }
    
    if (!sex.woman.checked & !sex.man.checked) {
        alert("Ingresa tu género")
        return
    }

    if (age.value < movie.actual.age) {
        alert("No tienes edad para ver la pelicula. Debes de tener: " + movie.actual.age)
        return
    }

    let message = `Gracias ${sex.man.checked ? "señor" : "señora"} ${name.value} por su compra`

    alert(message)
})


