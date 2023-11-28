// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti

const volleyClubs = [
    {name: "NameA", points: generateNumber(), fouls: "gen"}
    {name: "NameB", points: "", fouls: ""}
    {name: "NameC", points: "", fouls: ""}

];
console.log(volleyClubs);


// =========== function =============
function generateNumber() {
    Math.floor(Math.random() * 100) +1;
    return;
}