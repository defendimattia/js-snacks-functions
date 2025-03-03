/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';



// Dichiara la funzione qui.

const toGreet = () => {
    let greetName = " "
    const infoData = new Date;
    const hour = infoData.getHours();
    if (hour > 0 && hour < 13) return greetName = "buongiorno " + name
    if (hour > 13 && hour < 17) return greetName = "buon pomeriggio " + name
    if (hour > 17 && hour < 0) return greetName = "buonasera " + name   
}

// Invoca la funzione qui e stampa il risultato in console
const greet = toGreet()
console.log(greet)


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.