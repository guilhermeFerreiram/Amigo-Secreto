let listaAmigos = [];
let listaDeIndicesGerados = [];
let listaSorteio = [];
let listaStr = document.getElementById("lista-sorteio");
let listaAmg = document.getElementById("lista-amigos");

function adicionar(){
    let nomeAmigo = document.getElementById("nome-amigo");
    listaAmigos.push(" " + nomeAmigo.value);
    listaAmg.textContent = listaAmigos;
    nomeAmigo.value = "";
}

function sortear(){

    listaStr.textContent = "";
    listaSorteio = [];
    listaDeIndicesGerados = [];

   embaralha(listaAmigos);

    for (let i = 0; i < listaSorteio.length; i++){

        if (i == listaSorteio.length - 1){
            listaStr.innerHTML = listaStr.innerHTML + listaSorteio[i] + " --> " + listaSorteio[0];
        } else {
            listaStr.innerHTML = listaStr.innerHTML + listaSorteio[i] + " --> " + listaSorteio[i + 1] + "<br>";
        }
    }
}

function embaralha(lista){

    while (listaDeIndicesGerados.length < lista.length){
        let indiceAleatorio = Math.floor(Math.random() * (lista.length));

        if (listaDeIndicesGerados.includes(indiceAleatorio)){
            return embaralha(listaAmigos);
        } else{
            listaSorteio.push(lista[indiceAleatorio]);
            listaDeIndicesGerados.push(indiceAleatorio);
        }
    }

}

function reiniciar(){
    listaStr.textContent = "";
    listaAmg.textContent = "";
    listaAmigos = [];
}

//Falta um detalhe: se eu clicar em adicionar e o input estiver vazio, ele adiciona um "nome vazio"