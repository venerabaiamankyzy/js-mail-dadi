const playerPerson = Math.floor(Math.random() * 6 + 1);
const playerComp = Math.floor(Math.random() * 6 + 1);

console.log(playerPerson);
console.log(playerComp);

if (playerPerson > playerComp) {
  console.log(`Hai vinto con un punteggio di ${playerPerson}`);
} else if (playerPerson < playerComp) {
  console.log(`Hai vinto con un punteggio di ${playerComp}`);
} else {
   console.log(`Siete pari`);
}
