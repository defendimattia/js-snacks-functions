/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// function arrayFirstChar(arr) {
//     const newArr = [];
//     for (i = 0; i < arr.length; i++) {
//         newArr.push(arr[i][0]);
//     };
//     return newArr;
// };

// ARROW FUNCTION

const arrayFirstChar = (arr) => {
    const newArr = [];
     for (i = 0; i < arr.length; i++) {
         newArr.push(arr[i][0]);
     };
     return newArr;
 };



// Invoca la funzione qui e stampa il risultato in console
const capsInitArray = arrayFirstChar(names);
console.log(capsInitArray);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]