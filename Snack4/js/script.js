// Snack - 4
// genera un array di 10 numeri casuali range 1- 100, ma stavolta senza doppioni

let myArray = ["prova"];
console.log(myArray);
const myButton = document.querySelector("button");
console.log(myButton);
const myOutput = document.querySelector(".space");
console.log(myOutput);


myButton.addEventListener("click",
    function () {

        myArray.length = 0;
        console.log(myArray);

        while (myArray.length < 10) {
            
            let myNum = Math.floor(Math.random() * 100) + 1;

            console.log(myNum);
            if (myArray.indexOf(myNum) === -1) {
                myArray.push(myNum);
            }
        }
        myOutput.innerHTML = myArray;
        console.log(myArray);
    }
)

// while (myArray.length < 10) {
//     let myNum = Math.floor(Math.random() * 100) + 1;

//     let trovato = myArray.includes(myNum);
//     console.log(trovato);
//     if (!trovato){
//         myArray.push(myNum);
//     }
// }

// console.log(myArray);



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