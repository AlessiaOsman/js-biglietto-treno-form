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

const inputKm = document.getElementById('km')
const inputAge = document.getElementById('age')
const button = document.getElementById('button')

console.log(inputKm, inputAge)

let discount = null; 

let message = 'Il costo del tuo biglietto è '


button.addEventListener('click', function(){
    const numberKm = parseInt(inputKm.value);
    console.log(numberKm)

    const userAge = parseInt(inputAge.value);
    console.log(userAge)

    const unitPrice = 0.21

    const ticketPrice = numberKm*unitPrice;
    console.log(ticketPrice)

    if (userAge < 18){
        discount = ticketPrice * 20 / 100
        console.log(discount)
    
    } else if (userAge > 65){
        discount = ticketPrice * 40 / 100
        console.log(discount)
    }

    let finalPrice = ticketPrice - discount;
    console.log(finalPrice)
    
    message += finalPrice.toFixed(2) + ' euro';
    console.log(message)
})


