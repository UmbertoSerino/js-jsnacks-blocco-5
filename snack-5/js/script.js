// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti

const volleyClubs = [
    {name: "NameA", points: generateNumber(), fouls: generateNumber()},
    {name: "NameB", points: generateNumber(), fouls: generateNumber()},
    {name: "NameC", points: generateNumber(), fouls: generateNumber()}

];
console.log(volleyClubs);


// =========== function =============
function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;

}