//Partendo da un array semplice tipo:var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// INPUT
let inputOne = parseInt(prompt("inserisci un numero tra 0 e 5"));
let inputTwo = parseInt(prompt("inserisci un numero tra 0 e 5"));

// creo il nuovo array
const arrayUte = myArray.filter((element, index) => {
    if(index >=  inputOne && index <=  inputTwo){
        return element
    }
});

console.log(arrayUte);