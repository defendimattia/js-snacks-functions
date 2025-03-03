/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// function onlyDefInitCharArray(arr, char) {
//     const newArr = [];
//     for (i = 0; i < arr.length; i++) {
//         if (char.toUpperCase() === arr[i][0]) newArr.push(arr[i]);
//     };
//     return newArr
// };

// ARROW FUCTION

const onlyDefInitCharArray = (arr, char) => {
    const newArr = [];
    for (i = 0; i < arr.length; i++) {
    if (char.toUpperCase() === arr[i][0]) newArr.push(arr[i]);
    };
    return newArr
};



// Invoca la funzione qui e stampa il risultato in console
newNames = onlyDefInitCharArray(names, "a");
console.log(newNames)



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]