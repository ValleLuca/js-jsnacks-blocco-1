//consegna
/*Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo.*/

let datoN = parseInt(prompt("Inserire dato")); //dato inserito dall'utente



for(let i = 0; i < datoN; i++){ //ciclo per più array

    let newArr = []; //creo una nuova array

    for(let i2 = 0; i2 < 10; i2++){ //per generare numeri random e aggiungerli
        let x = Math.floor((Math.random() * 100) + 1);
        newArr.push(x);
    }
    console.log(newArr);
    
}
