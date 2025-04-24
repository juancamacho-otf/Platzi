// Declaración de variables globales para almacenar los ataques y las vidas de los jugadores
let ataqueJugador
let ataqueEnemigo
let vidasEnemigo = 3  // Inicialmente el enemigo tiene 3 vidas
let vidasJugador = 3  // El jugador también comienza con 3 vidas

// Esta función se ejecuta automáticamente al cargar el HTML.
// Se utiliza para agregar los eventos necesarios a los botones del juego.
function iniciarJuego() {
    // Seleccionamos el botón con el id "selecPok" y le agregamos un listener para el evento 'click'
    let botonPokemon = document.getElementById("selecPok")
    botonPokemon.addEventListener('click', selecionPokemon)

    // Escuchamos el click del botón de ataque Fuego y llamamos a su función
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    // Escuchamos el click del botón de ataque Agua y llamamos a su función
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    // Escuchamos el click del botón de ataque Tierra y llamamos a su función
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

// Función que se ejecuta al hacer click en el botón de seleccionar Pokémon
function selecionPokemon() {
    // Obtenemos los elementos de los inputs (checkbox/radio) de cada Pokémon
    let pikachuselec = document.getElementById("pikachu");
    let charmanderselec = document.getElementById("charmander");
    let squirtleselec = document.getElementById("squirtle");
    
    // Obtenemos el span donde se mostrará el Pokémon seleccionado por el jugador
    let pokemonju = document.getElementById("pokemon-jugador");

    // Verificamos cuál Pokémon ha sido seleccionado utilizando la propiedad "checked"
    if (pikachuselec.checked) {
        pokemonju.innerHTML = 'Pikachu'
    } else if (charmanderselec.checked) {
        pokemonju.innerHTML = 'Charmander'
    } else if (squirtleselec.checked) {
        pokemonju.innerHTML = 'squirtle'
    } else {
        // Si no se ha seleccionado ninguno, mostramos una alerta
        alert('selecciona una mascota😒')
    }

    // Llamamos la función para que la computadora seleccione su Pokémon aleatoriamente
    selecionPokemonpc()
}

// Función para seleccionar aleatoriamente el Pokémon enemigo (de la computadora)
function selecionPokemonpc() {
    // Generamos un número aleatorio entre 1 y 3
    let pokemonAleatoria = aleatorio(1, 3)

    // Obtenemos el span donde se mostrará el Pokémon enemigo
    let pokemonEne = document.getElementById('pokemon-enemigo')

    // Dependiendo del número aleatorio, asignamos el Pokémon correspondiente
    if (pokemonAleatoria == 1) {
        pokemonEne.innerHTML = 'pikachu'
    } else if (pokemonAleatoria == 2) {
        pokemonEne.innerHTML = 'charmander'
    } else {
        pokemonEne.innerHTML = 'squirtle'
    }
}

// Función que se ejecuta al hacer click en el botón de ataque FUEGO
function ataqueFuego() {
    // Asignamos a la variable el tipo de ataque del jugador
    ataqueJugador = 'FUEGO'
    // Llamamos a la función que selecciona aleatoriamente el ataque enemigo
    ataqueAleatorioEnemigo()
}

// Función que se ejecuta al hacer click en el botón de ataque AGUA
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

// Función que se ejecuta al hacer click en el botón de ataque TIERRA
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

// Función que selecciona un ataque aleatorio para el enemigo
function ataqueAleatorioEnemigo() {
    // Generamos un número aleatorio entre 1 y 3
    let ataqueAleatorio = aleatorio(1, 3)

    // Dependiendo del número aleatorio, asignamos el tipo de ataque
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    // Llamamos a la función combate para resolver el enfrentamiento
    combate()
}

// Función que evalúa el resultado del combate entre el jugador y el enemigo
function combate() {
    // Obtenemos los elementos del DOM donde se muestran las vidas
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    // Comparamos los ataques para determinar el resultado del combate
    if (ataqueEnemigo == ataqueJugador) {
        // Si ambos ataques son iguales, es un empate
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        // FUEGO gana a TIERRA
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        // AGUA gana a FUEGO
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        // TIERRA gana a AGUA
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        // Si ninguna condición se cumple, el jugador pierde
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    // Revisamos si alguien ha perdido todas sus vidas
    revisarVidas()
}

// Función para revisar si el juego ha terminado
function revisarVidas() {
    if (vidasEnemigo == 0) {
        // Si el enemigo se quedó sin vidas, el jugador gana
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (vidasJugador == 0) {
        // Si el jugador se quedó sin vidas, pierde
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

// Función para mostrar mensajes de cada turno del combate
function crearMensaje(resultado) {
    // Obtenemos el elemento donde se mostrarán los mensajes
    let sectionMensajes = document.getElementById('mensajes')

    // Creamos un nuevo párrafo para el mensaje
    let parrafo = document.createElement('p')

    // Mostramos los ataques realizados y el resultado del combate
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado

    // Agregamos el párrafo a la sección de mensajes
    sectionMensajes.appendChild(parrafo)
}

// Función para mostrar el mensaje final del juego
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)
}

// Función que genera un número aleatorio entre un mínimo y un máximo incluidos
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Esta línea hace que la función iniciarJuego() se ejecute una vez que la ventana (HTML) haya terminado de cargar
window.addEventListener('load', iniciarJuego)
