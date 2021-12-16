const vuotoArr = [];
let somma = 0;
let i = 0;
const risultatoFinale = document.getElementById("risultato");


while(somma < 50){
    const n = parseInt(prompt("inserire numero"));
    vuotoArr.push(n);
    somma += vuotoArr[i];
    i++;
    console.log(somma);
}




