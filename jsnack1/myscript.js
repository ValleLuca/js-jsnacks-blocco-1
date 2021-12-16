//Consegna
/*Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.*/

const vuotoArr = []; //dichiarazione array
let somma = 0; // dichiarazione somma
let i = 0; // dichiarazione "i" per contatore

while(somma < 50){ //while per controllo max 50 numero
    const n = parseInt(prompt("inserire numero")); // input operatore via prompt
    vuotoArr.push(n); // aggiunta nell'array attraverso il push
    somma += vuotoArr[i]; //somma dell'input con il valore nell'array
    i++; //aumento contatore
    console.log(somma); //stampo valore di somma ogni volta che si ripete il ciclo
}




