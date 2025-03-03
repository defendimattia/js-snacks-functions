/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// // Dichiara la funzione qui.
// function toGreet(name) {
//     const greetName = "ciao " + name;
//     return greetName;
// };

// ARROW FUNCTION

const toGreet = (name) => {
    const greetName = "ciao " + name;
    return greetName;
}

// Invoca la funzione qui e stampa il risultato in console
const helloName = toGreet(userName);
console.log(helloName);


//Risultato atteso se si passa 'Mario': // ciao Mario
