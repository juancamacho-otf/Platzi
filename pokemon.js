// al cargar el html va inicar esta funcion estamos llamando el id y escuchando el evento clikc 
function iniciarJuego(){
    let botonPokemon= document.getElementById("selecPok")
    botonPokemon.addEventListener('click',selecionPokemon)
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}
//llamamos los id de los input, ademas llamamos el id del span. 
/* 
 hacemos una condicional,  con la funcion de checked es para verificar el input de cual esta seleccionado
 en el momento que esa funcion dice que si esta seleccionado pues con la condicional vamos a cambiar el label para mostar el pokemon
*/
function selecionPokemon(){
    let pikachuselec = document.getElementById("pikachu");
    let charmanderselec = document.getElementById("charmander");
    let squirtleselec = document.getElementById("squirtle");
    let pokemonju = document.getElementById("pokemon-jugador");

    if(pikachuselec.checked){
        pokemonju.innerHTML='Pikachu'
    }else if (charmanderselec.checked){
        pokemonju.innerHTML='Charmander'
    }else if (squirtleselec.checked){
        pokemonju.innerHTML='squirtle'
    }else{
        alert('selecciona una mascota😒')
    }
    selecionPokemonpc()
}
/* 
esta funcion se ejecuta arriba al nosotros elejir el pokemon, es lo mismo de arriba es tomar el id de el span
y cambiarle el valor que tiene, asi mismo es validando la aleatoridad que tiene un rango de 1 a 3 
*/

function selecionPokemonpc(){
    let pokemonAleatoria = aleatorio(1,3)
    let pokemonEne = document.getElementById('pokemon-enemigo')

    if (pokemonAleatoria == 1) {
        pokemonEne.innerHTML = 'pikachu'
    } else if (pokemonAleatoria == 2) {
        pokemonEne.innerHTML = 'charmander'
    } else {
        pokemonEne.innerHTML = 'squirtle'
    }
}
/**
 * Arriba estamos escuchando los click de los ataques 
 * despues de eso le estamos cambiando la variable de ataque
 */
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
/**
 * se esta haciendo lo mismo de aleatorio y solo llamamos aleatorio y se lo almacenamos 
 * lo mismo con la condicional se va asignando el tipo de ataque
 * por ultimo llamamos a la funcion de cobate 
 */
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}
/**
 * en el combate miramos si las opciones de la maquina es igual o demas se diga si es empate yo creo que es subjetivo
 el de ganar o perder ya que aca le das las reglas al juego, en este caso fuego gana tierra y agua a fuego 

 */
function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
}
// creal el mensaje de lo de que esta haciendo
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', las mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}



// esta funcion debe tener muy presente porque es la manera de dar un rago a la aleotoridad 
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//le estamos  diciendo a la ventana del navegador que escuche despues de cargar el html asi no nos va a dar errores 
window.addEventListener('load', iniciarJuego)  