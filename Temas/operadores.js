let c = 100;
// Suma
c1 = c + 20;
console.log("Linea Suma 1",c);
c += 30;
console.log("Linea Suma 2",c);

// Resta
c = c - 20;
console.log("Linea resta 1",c);
c -= 30;
console.log("Linea resta 2",c);

// Multiplicacion
cr = c * 3;
console.log("Linea mulitiplicacion 1",c);
c *= 4;
console.log("Linea mulitiplicacion 2",c);

//division
c = c / 5;
console.log("Linea division 1",c);
c /= 4;
console.log("Linea division 2",c);

//residuo
c = c % 3;
console.log("Linea residuo 1",c);
c %= 3;
console.log("Linea residuo 2",c);

//exponenciacion
c = c **3;
console.log("Linea exponecial 1",c);
c **= 2;
console.log("Linea exponecial 2",c);

let e = "100";
let edad = 100
let r=e==edad;
let r1=e===edad;
console.log(r);
console.log(r1);

let counterOne = 100;
let counterTwo = 200;
let responseOne = counterOne == counterTwo;
console.log(responseOne);

console.log("20" == 20); //true - no estricta
console.log(20 === "20"); //falso - estricto

console.log("comparacion no igual !=");
let responseTwo = counterOne != "100";
console(responseTwo);
let responseThree = counterOne != 100;
console(responseThree);

let responseFour = counterOne !== "100";
console.log(responseFour);

console.log("Mayor que");
console.log(counterOne > 200); //counter = 100 ... true

console.log("Mayor igual");
console.log(counterOne >= 100); //true

console.log("Menor que");
console.log(counterOne < 99); // false


console.log("Menor igual que");
console.log(counterOne <= 100); //true