// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// //Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var arrayObj = [
  { name: 'Poppy', type: 'tshirt', color: 'red' },
  { name: 'Jumping', type: 'occhiali', color: 'blue' },
  { name: 'CrissCross', type: 'scarpe', color: 'black' },
  { name: 'Jenny', type: 'borsa', color: 'pink' },
];
console.log(arrayObj);

// copio array
var arrayObjTwo = arrayObj.map((element, index) => {
  let obj = { ...element }
  return obj;
});

// cliclo arrayObjTwo
arrayObjTwo.forEach((element, index, array) => {
  element.position = randomLetter();
});

console.log(arrayObjTwo);

// funzione che genera lettera casuale
function randomLetter() {
  return letter.charAt(Math.floor(Math.random() * letter.length));
}