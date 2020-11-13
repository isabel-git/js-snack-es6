// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10 

const palla = {
  "nome": 'Palla',
  "peso": 10
}
console.log(palla);

// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla. 
const pesoUte = parseInt(prompt("inserisci peso"));
// console.log(pesoUte);

// nuovo valore
palla['peso'] = pesoUte;
console.log(palla);