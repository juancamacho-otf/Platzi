// Variables para guardar el ataque de jugador y enemigo
let ataqueJugador;
let ataqueEnemigo;

// Variables para llevar el conteo de vidas
let vidasEnemigo = 3;
let vidasJugador = 3;

// Función principal que se ejecuta al cargar la página
function iniciarJuego() {
  // Escuchamos el botón de selección de Pokémon
  document.getElementById("selecPok").addEventListener('click', seleccionarPokemon);
  
  // Escuchamos los botones de ataque y pasamos el tipo correspondiente
  document.getElementById("boton-fuego").addEventListener('click', () => seleccionarAtaque('FUEGO'));
  document.getElementById("boton-agua").addEventListener('click', () => seleccionarAtaque('AGUA'));
  document.getElementById("boton-tierra").addEventListener('click', () => seleccionarAtaque('TIERRA'));
}

// Función para seleccionar el Pokémon del jugador
function seleccionarPokemon() {
  const pokemonSeleccionado = document.querySelector('input[name="pokemon"]:checked');
  const spanJugador = document.getElementById("pokemon-jugador");

  // Si se seleccionó un Pokémon, lo mostramos en pantalla
  if (pokemonSeleccionado) {
    spanJugador.textContent = pokemonSeleccionado.id.charAt(0).toUpperCase() + pokemonSeleccionado.id.slice(1);
    seleccionarPokemonPc();
  } else {
    // Si no se seleccionó, mostramos un mensaje de alerta
    alert("Por favor selecciona un Pokémon");
  }
}

// Función para seleccionar aleatoriamente un Pokémon para el enemigo
function seleccionarPokemonPc() {
  const opciones = ['Pikachu', 'Charmander', 'Squirtle'];
  const aleatorio = opciones[Math.floor(Math.random() * opciones.length)];
  document.getElementById('pokemon-enemigo').textContent = aleatorio;
}

// Función para seleccionar un ataque
function seleccionarAtaque(tipo) {
  // Si el juego ya terminó, no hacemos nada
  if (vidasJugador === 0 || vidasEnemigo === 0) return;

  // Guardamos el ataque del jugador y generamos uno aleatorio para el enemigo
  ataqueJugador = tipo;
  const opciones = ['FUEGO', 'AGUA', 'TIERRA'];
  ataqueEnemigo = opciones[Math.floor(Math.random() * opciones.length)];

  // Llamamos a la función de combate
  combate();
}

// Función para resolver el combate
function combate() {
  let resultado;

  // Comprobamos los distintos casos posibles
  if (ataqueJugador === ataqueEnemigo) {
    resultado = "EMPATE";
  } else if (
    (ataqueJugador === 'FUEGO' && ataqueEnemigo === 'TIERRA') ||
    (ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO') ||
    (ataqueJugador === 'TIERRA' && ataqueEnemigo === 'AGUA')
  ) {
    resultado = "GANASTE";
    vidasEnemigo--;
    document.getElementById('vidas-enemigo').textContent = vidasEnemigo;
  } else {
    resultado = "PERDISTE";
    vidasJugador--;
    document.getElementById('vidas-jugador').textContent = vidasJugador;
  }

  // Mostramos el resultado del combate
  mostrarMensaje(resultado);

  // Verificamos si alguien ganó
  revisarVidas();
}

// Función para mostrar un mensaje de resultado parcial
function mostrarMensaje(mensaje) {
  const mensajes = document.getElementById('mensajes');
  const p = document.createElement('p');
  p.textContent = `Tu ataque: ${ataqueJugador}, Enemigo: ${ataqueEnemigo} → ${mensaje}`;
  mensajes.appendChild(p);
}

// Función que revisa si alguien perdió todas sus vidas
function revisarVidas() {
  if (vidasJugador === 0) {
    mostrarMensajeFinal("Has perdido 😢");
  } else if (vidasEnemigo === 0) {
    mostrarMensajeFinal("¡Has ganado! 🎉");
  }
}

// Función para mostrar el mensaje final del juego
function mostrarMensajeFinal(mensajeFinal) {
  const mensajes = document.getElementById('mensajes');
  const p = document.createElement('p');
  p.textContent = mensajeFinal;
  mensajes.appendChild(p);
}

// Ejecutamos la función principal al cargar la ventana
window.addEventListener('load', iniciarJuego);
