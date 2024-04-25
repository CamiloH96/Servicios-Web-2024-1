for (let i = 0; i <= 100; i++) {
    console.log(`counter with for ${i}`);
}

for (let n = 0; n <= 100; n += 2) {
    console.log(`counter with for ${n}`);
}

let frutas = ["pera", "manzana","naranja","papaya","limon"];

for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
}

for (let index = frutas.length - 1; index >= 0 ; index --) {
    console.log(frutas[index]);
}

//For of
for (const fruta of frutas) {
    console.log(fruta)
}

const nombre = "Camilo"

for (const nombres of nombre) {
    console.log(nombres)
}
const persona = {
    nombre: "Camilo",
    apellido: "Hernandez",
    age: 26,
    altura: "1.80",
    peso: "68"
}

for (const key in persona) {
    console.log(key);
    console.log(persona[key]);
}