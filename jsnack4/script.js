// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore. 

let min;

const bici = [
  {
    "nome": 'Bici 1',
    "peso": 10
  },
  {
    "nome": 'Bici 2',
    "peso": 20
  },
  {
    "nome": 'Bici 3',
    "peso": 30
  },
  {
    "nome": 'Bici 4',
    "peso": 40
  }
];

min = bici[0].peso;

// definire il peso minore
for (let i = 0; i < bici.length; i++) {
  if (min > bici[i].peso) {
    min = bici[i].peso;
  }
}

console.log('min', min);
