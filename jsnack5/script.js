// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti  

const squadre = [
  {
    "nome": 'Real Madrid',
    "punti": 0,
    "falli": 0
  },
  {
    "nome": 'Arsenal',
    "punti": 0,
    "falli": 0
  },
  {
    "nome": 'Milan',
    "punti": 0,
    "falli": 0
  },
  {
    "nome": 'Inter',
    "punti": 0,
    "falli": 0
  }
];

// aggiungo random
squadre.forEach(element => {
  element.punti = Math.floor(Math.random() * 10) + 1;
  element.falli = Math.floor(Math.random() * 10) + 1;
});

console.log(squadre);