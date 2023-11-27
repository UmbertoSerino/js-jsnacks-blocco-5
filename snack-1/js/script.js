// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, model e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.

const carsList = [
    { brand: 'Toyota', model: 'Yaris', fuel: 'benzina' },
    { brand: 'Volkswagen', model: 'Golf', fuel: 'diesel' },
    { brand: 'Ferrari', model: 'V10', fuel: 'elettrico' },
    { brand: 'Fiat', model: 'Panda', fuel: 'gpl' },
    { brand: 'Renault', model: 'Clio', fuel: 'diesel' },
    { brand: 'AstonMartin', model: 'Valhalla', fuel: 'elettrico' },
    { brand: 'Ford', model: 'Focus', fuel: 'benzina' },
    { brand: 'Cytroen', model: 'C3', fuel: 'diesel' },
    { brand: 'Hyundai', model: 'Kona', fuel: 'elettrico' },
    { brand: 'Mercedes', model: 'GLC', fuel: 'metano' },
];

console.log(carsList);

const autoBenzina = carsList.filter(auto => auto.fuel === 'benzina');
console.log(autoBenzina);

const autoDiesel = carsList.filter(auto => auto.fuel === 'diesel');
console.log(autoDiesel);

const autoMetano = carsList.filter(auto => auto.fuel === 'metano');
console.log(autoMetano);


