let counter=1;

while(counter<10){
    console.log(counter);
    counter++;
}


//
let isOpen = false;

do {
    console.log(`isOpen = ${isOpen}`);
} while (isOpen);


//
let counter2=10;

do {
    console.log(`isOpen 2 = ${counter2}`);
    counter2++;
} while (counter2 < 10);

//
let numero = 0;
do {
    numero = prompt("Digite un numero mayor que 100");
    if(numero >= 100){
        alert("Escribiste un numero mayor a 100");
    }else{
        alert(`el numero que escribiste es menor a 100 ${numero}`);
    }
} while (numero < 100);