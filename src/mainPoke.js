const btonpok = document.getElementById("traerData");

let cont = document.getElementById("cont");

btonpok.addEventListener("click", () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=50&offset=20')
        .then(res => res.json())
        .then(data => {
            recorrerdata(data);
        });

    function recorrerdata(data) {
        console.log(data);
        for (let indice of data) {
            console.log(indice);
        }
    }
});


/*
function mostrar(myJson) {
    console.log(myJson);
    cont.innerHTML = ''
    for (let indice of myJson) {
        //console.log(indice);
    }
}*/