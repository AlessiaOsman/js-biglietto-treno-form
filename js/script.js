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
const inputName = document.getElementById('name')
const button = document.getElementById('button')
const paragraphName = document.getElementById('ticketName')
const paragraphPrice = document.getElementById('ticketFinalPrice')
const paragraphType = document.getElementById('ticketType')
const paragraphCoach = document.getElementById('coach')
const paragraphCode = document.getElementById('code')
const userTicket = document.getElementById('ticket')

console.log(inputKm, inputAge, inputName, paragraphName, paragraphPrice, paragraphType)

let discount = null; 

let message = 'Il costo del tuo biglietto è '

let userTicketType = 'Biglietto Standard'




button.addEventListener ('click', function(){
    const numberKm = parseInt(inputKm.value);
    console.log(numberKm)

    const userAge = parseInt(inputAge.value);
    console.log(userAge)

    const userName = inputName.value

    let coachNumber = Math.floor(Math.random()*10)

    let codeCp = Math.floor(Math.random()*10000)

    const unitPrice = 0.21

    const ticketPrice = numberKm*unitPrice;
    console.log(ticketPrice)

    

    if (userAge === isNaN || numberKm === isNaN ){
        alert('i valori inseriti non sono corretti');
        return
    }

    if (userAge < 18){
        discount = ticketPrice * 20 / 100
        console.log(discount)
        userTicketType = 'Biglietto giovani'
    
    } else if (userAge > 65){
        discount = ticketPrice * 40 / 100
        console.log(discount)
        userTicketType = 'Biglietto over 65'
    }

    let finalPrice = ticketPrice - discount;
    console.log(finalPrice)
    

    paragraphName.innerText = userName
    paragraphPrice.innerText = finalPrice.toFixed(2)
    paragraphType.innerText = userTicketType
    paragraphCoach.innerText = coachNumber
    paragraphCode.innerText = codeCp

})


