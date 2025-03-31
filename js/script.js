// Dichiaro tutte le variabili che mi servono

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

const form = document.querySelector('form');

const userName = document.getElementById('userName');
const userKm = document.getElementById('userKm');
const userAge = document.getElementById('userAge');

const offerta = document.getElementById('offerta');
const carrozza = document.getElementById('carrozza');
const codice = document.getElementById('codice');
const costo = document.getElementById('costo');
const passName = document.getElementById('pass-name');

//creo funzionamento del bottone "genera"

button1.addEventListener('click', function(event) {
    event.preventDefault();
    carrozza.innerHTML = Math.floor(Math.random() * 9) + 1; 
    codice.innerHTML = Math.floor(Math.random() * 10000) + 1; 
    passName.innerHTML = userName.value; 
    

    let prezzo = 0;
    const costoKm = 0.21; 
    prezzo = costoKm * parseFloat(userKm.value);

    if (userAge.value === 'minorenne') { 
        costo.innerHTML = (prezzo - (prezzo * 20 / 100)).toFixed(2);
        offerta.innerHTML = 'Sconto minorenne';
    } else if (userAge.value === 'over 65') { 
        costo.innerHTML = (prezzo - (prezzo * 40 / 100)).toFixed(2);
        offerta.innerHTML = 'Sconto over 65';
    } else {
        costo.innerHTML = prezzo.toFixed(2);
        offerta.innerHTML = 'Tariffa standard';
    }
});