//consegna
/*un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.*/

const easyArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //dichiarazione variabile


let divRosso = document.createElement("div"); //creazione div
divRosso.setAttribute("id", "rosso"); //aggiunta id e colore
document.body.appendChild(divRosso); // inserimento nell'html 

let divVerde = document.createElement("div"); //creazione div
divVerde.setAttribute("id", "verde"); //aggiunta id e colore
document.body.appendChild(divVerde); // inserimento nell'html


for(let i = 0; i < easyArr.length; i++){ //ciclo in base alla grandezza dell'array
    if(easyArr[i] % 2 == 0) //pari o dispari
    {
        divVerde.innerHTML += easyArr[i] + " ";  //pari
    }
    else
    {
        divRosso.innerHTML += easyArr[i] + " "; //dispari
    }
}