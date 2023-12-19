console.log('JS OK')

// Chiedere km da percorrere
// Chiedere età utente
// Calcolare il prezzo a km per i km da percorrere
// Applicare sconto del 20% ai minori di 18
// Applicare scontro del 40% agli over 65
// Output prezzo finale con massimo due decimali
// Creare 2 input e un button
// Stampare risposta in console
// Creare form in pagina
// Recap dati e output prezzo stampato in pagina

const numberKm = parseInt(prompt('Quanti km devi percorrere?', 20))
const userAge = parseInt(prompt('Qual è la tua età?', 39))

console.log(numberKm, userAge)

const paragraph = document.getElementById('finalUserPrice')

// Potevo creare una variabile per il costo a km

const ticketPrice = numberKm*0.21
console.log(ticketPrice)

let discount = 0; // a livello concettuale 0 non andava bene perchè se non rientro nelle casistiche lo sconto non è 0 ma null

let message = 'Il costo del tuo biglietto è '

if (userAge < 18){
    discount = ticketPrice * 20 / 100
    console.log(discount)

} else if (userAge > 65){
    discount = ticketPrice * 40 / 100
    console.log(discount)
}

let finalPrice = ticketPrice - discount
console.log(finalPrice)

message += finalPrice.toFixed(2) + ' euro';

/*message += Math.floor(finalPrice*100)/100 + ' euro'; Lo scopo del Math.floor è un altro */

paragraph.innerText = message
