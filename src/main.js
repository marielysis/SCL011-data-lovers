// data completa
const allPokeData = window.POKEMON.pokemon;
// data promediada con una propiedad (nuevo arreglo numerico)
const mediaPoke = window.data.pokeMedia(allPokeData);
// data filtrada
const printPokeComm = window.data.filterPokeCommon(allPokeData, mediaPoke);
const printPokeRare = window.data.filterPokeRare(allPokeData, mediaPoke);

//asignar variables botones
const buttonPokeComm = document.getElementById("pokeComm");
const buttonPokeRare = document.getElementById("pokeRare");
const buttonFindMe = document.getElementById("findMe");


// Crear funcion para las tarjetas pokecard
function cardsPokemonGo(allPokeData) {
    allPokeData.forEach(element => {
        //Creando el elemento div que contiene la mini tarjeta pokemon
        let createMiniPokeCars = document.createElement("div");
        //Asignando elemento padre al div creado con variable que es el contenedor
        let asigPadre = document.getElementById("principal");
        //asignamos atributos de clases dadas en style
        createMiniPokeCars.setAttribute("class", "classDivMiniCard");
        //asignamos atributos de id 
        createMiniPokeCars.setAttribute("id", "divMiniCard");
        //agregamos hijo al padre con metodo appendChild
        asigPadre.appendChild(createMiniPokeCars);
        //Imprimo los valores de las propiedades de la data filtrada
        createMiniPokeCars.innerHTML += `<img src = ${element.img}>
                                        <h1>${element.name}</h1>
                                        <p>Spawn % ${element.spawn_chance}</p>
                                        <p>Hora ${element.spawn_time}</p>
                                        <a href="#modal" id="abrirModal class="classDivMiniCard" >Más...</a>`
/*        let createDivModal = document.createElement("div");
        createDivModal.appendChild(asigPadre);
        createAmodal.setAttribute("href", "#modal");
        createAmodal.setAttribute("id", "abrirModal");
        createAmodal.className = "classDivMiniCard";
        let contModal = document.getElementById("divMiniCard");
        contModal.appendChild(createAmodal);*/





    })
}

//asigno evento al boton e imprimo data filtrada pokemon comunes
buttonPokeComm.addEventListener("click", () => {
    document.getElementById("divButton2").innerHTML = "";
    //llamo a la funcion tarjetas e imprimo solo la data filtrada
    cardsPokemonGo(printPokeComm);
});

//asigno evento al boton e imprimo data filtrada pokemon raros
buttonPokeRare.addEventListener("click", () => {
    document.getElementById("divButton1").innerHTML = "";
    //llamo a la funcion tarjetas e imprimo solo la data filtrada
    cardsPokemonGo(printPokeRare);
});

//---------------------Encuentrame-------------------------

// mostar data completa a traves del boton encuentra tu pokemon
buttonFindMe.addEventListener("click", () => {
    document.getElementById("pokeBox").innerHTML = "";
    //llamo a funcion tarjetas y muestra todos los pokemones
    cardsPokemonGo(allPokeData);
});

//asignar valor de select a una variable
const sortPokemon = document.getElementById("sortPoke");
//funcion ordenar y anidarlo a select
sortPokemon.addEventListener("change", showOrdenPoke);
document.getElementById("principal").innerHTML = "";

function showOrdenPoke() {
    // asignamos valor de la opcion que se escoje en seletc
    let selectedOrder = sortPokemon.options[sortPokemon.selectedIndex].value;
    // asigno funcion order de data a una variable para mostrar
    let datapokemones = window.data.sortPoke(allPokeData, selectedOrder);
    document.getElementById("principal").innerHTML = "";
    cardsPokemonGo(datapokemones);
}