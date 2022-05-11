// Snack - 5
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// const myArray = [];
// console.log(typeof myArray);


// while (myArray < 50) {
//     const myValue = parseInt(prompt("inserisci un numero"));
//     myArray.push(myValue);
//     console.log(typeof myValue);
//     console.log(myArray);
// }


// const myButton = document.querySelector("button");
// const myValue = parseInt(document.querySelector("input").value);
// console.log(typeof myValue);



// myButton.addEventListener("click",
//     function() {
//         while (somma elementi array < 50) {
            
//         }

//         myArray.push(myValue);
//         console.log(typeof myValue);
//         console.log(myArray);

//     }
// )



let arrayNumeriUtente = [];
let sommaNumeriUtente = 0;


do {

    let numeroUtente = parseInt(prompt("inserisci il tuo numero"));
    arrayNumeriUtente.push(numeroUtente);

    sommaNumeriUtente += numeroUtente;
    
    // for (let i = 0; i < arrayNumeriUtente.length; i++) {
    //     sommaNumeriUtente += arrayNumeriUtente[i];
        
    // }

} while (sommaNumeriUtente < 50);


// Lezione ----------------

// const listNum = [12,11,3,4,77,86,13,15];

// for cycle 
//  for (let i = 0; i < listNum.length; i++) {

//      let numIter = listNum[i];

//      console.log(numIter);
//  }

// while cycle 
// let i = 0;
// while (i < listNum.length) {

//     let numIter = listNum[i];
    
//     console.log(numIter);

//     i++;
// }

// maiUser = input utente;
// trovato = false;

// finché (l'array non è finito && trovato == false){

//     se(maiUser == elemento[i]Array){
//         setta trovato = true;
//     }
// }

// se (trovato){
//     può entrare
// } altrimenti {
//     non può entrare
// }

// do-while cycle
// viene eseguito una volta anche se le condizione non sono vere
