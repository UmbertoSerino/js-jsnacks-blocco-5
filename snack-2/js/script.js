// Crea un array di oggetti che rappresentino delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const usersList = [
    {firstName: `Carlotta`, lastName: `Della Cornovaglia`, age: 18 },
    {firstName: `Carla`, lastName: `Cracca`, age: 67 },
    {firstName: `Gina`, lastName: `Stefan`, age: 20 },
    {firstName: `Jacque`, lastName: `Yesman`, age: 30 },
    {firstName: `Primo`, lastName: `Seguace`, age: 12 },
    {firstName: `Gino`, lastName: `Della Monaca`, age: 10 },
];

console.log(usersList);

const ageToDrive = usersList.map((singlePerson) => {
    singlePerson.nomeCompleto = singlePerson.firstName + "" + singlePerson.lastName;
    singlePerson.maggiorenne = singlePerson.age >= 18;
    return singlePerson;
});

const adults = ageToDrive.filter ((person) => person.maggiorenne === true);
console.log(adults);

