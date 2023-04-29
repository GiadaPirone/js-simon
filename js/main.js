// VISUALIZZARE IN PAGINA 5 NUMERI CASUALI.
//come faccio?

//richiamo la funzione che mi genera i n casuali.
let numeri = [];
let dati = [];
casuale();






// setTimeout(confrontoValori, 15 * 1000);


// funzione n casuali.
function casuale() {
    
    for (let i = 0; i < 5; i++) {
        num = Math.round(Math.random() * 100); 
        numeri.push(num)
        document.getElementById("cinqueNumeri").innerHTML = numeri;
    }
    console.log(numeri);
    return num;
}


// funzione che mi fa sparire dopo tot sec quello che ho stampato su html.
setTimeout(function(){
    console.log("devi sparire!");
    document.getElementById("cinqueNumeri").innerHTML = "";
}, 5* 1000);



//funzione che mi genera il prompt tra tot secondi
setTimeout(function(){
    
    for (let i = 0; i < 5; i++) {
       datoInserito = parseInt( prompt(" inserisci i numeri che hai visulizzato"));
       dati.push(datoInserito);
    }
    console.log(dati);
    const tempo = setInterval( function(){
        document.getElementById("cinqueNumeri").innerHTML += "sta carburando!"; 
        setTimeout(function(){
            clearInterval(tempo);
        }, 6* 1000)
        
    }, 1* 1000)
    setTimeout (scomponiArrayDue, 7 * 1000);
    return datoInserito;
}, 6 * 1000);


//funzione che m,i scompone un array.

function scomponiArrayDue(){
    let punti = 0
    for (let i = 0; i < dati.length; i++) {
        const dato = dati[i];
        console.log("secondo array",);

        if ( numeri.includes(dato)){
            punti++;
            console.log("punteggio:" + punti , "indovinati:" + dato);
        }


    }
}











    
    



   


 