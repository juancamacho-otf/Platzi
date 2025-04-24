// al cargar el html va inicar esta funcion estamos llamando el id y escuchando el evento clikc 
function iniciarJuego(){
    let botonPokemon= document.getElementById("selecPok")
    botonPokemon.addEventListener('click',selecionPokemon)
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
}
//le estamos  diciendo a la ventana del navegador que escuche despues de cargar el html asi no nos va a dar errores 
window.addEventListener('load', iniciarJuego)  