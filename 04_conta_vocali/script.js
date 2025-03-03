/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

const vowel = ["a", "e", "i", "o", "u"];

let vowelNum = 0;

// Dichiara la funzione qui.
// function vowelNumbers(wrd) {
//     let counter = 0;
//     for (i = 0; i < wrd.length; i++) {
//         for (l = 0; l < vowel.length; l++) { 
//             if (vowel[l] === word[i]) counter +=1
//         };
//     };
//     return counter;
// };

// FUNCTION ARROW

const vowelNumbers = wrd => {
    let counter = 0;
    for (i = 0; i < wrd.length; i++) {
        for (l = 0; l < vowel.length; l++) { 
            if (vowel[l] === word[i]) counter +=1
        };
    };
    return counter;
};



// Invoca la funzione qui e stampa il risultato in console
vowelNum = vowelNumbers(word);
console.log(vowelNum);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)