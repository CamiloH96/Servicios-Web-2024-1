function add(num1, num2) {
    //Con retorno
    const sum = num1 + num2;
    return sum;
}

let r1 = add(1,2);
let r2 = add(3,4);
let r3 = add(5,6);

console.log(r1);
console.log(r2);
console.log(r3);

function saludo() {
    //Sin retorno
    console.log("Hello Word")
}
saludo();