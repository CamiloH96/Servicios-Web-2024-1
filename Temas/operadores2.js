console.log("<===================================================================>")
console.log(new Date().toDateString);

const fullName = "Camilo Hernandez";

console.log(fullName.length);
console.log(fullName[15]);
let brand = 'mazda';
console.log(brand[5]);
console.log(fullName.includes('Hernandez'));
console.log(fullName.includes('hernandez'));
console.log("Index of = "+fullName.indexOf("milo"));
console.log(fullName.startsWith("Cami")); //true
console.log(fullName.endsWith("paint")); //false
console.log(fullName.endsWith("Hernandez")); //true
console.log("Slice = "+fullName.slice(0,4)); 
console.log("Slice = "+fullName.slice(4)); //Recortar texto
console.log(fullName.toUpperCase()); //Todo en mayus
console.log(fullName.toLowerCase()); //Todo en minus
console.log("Replace = "+fullName.replace("Hernandez", "Ibarguen"))
console.log("Repeat = "+fullName.repeat(2));
console.log("Trim = ")
console.log(fullName.trim()); //Elimina los espacios a lado y lado
console.log("Split = ")
console.log(" Ca mi Lo".split(" ")); // ['Ca', 'mi' 'Lo'] Convierte el texto en un

let nombre = "camilo";
let a= nombre[0].toUpperCase();
console.log(a+nombre.slice(1));
console.log(nombre.replace(nombre[0],nombre[0].toLocaleUpperCase()));