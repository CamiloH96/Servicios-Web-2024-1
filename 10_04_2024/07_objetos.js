let car = {
    brand :"mazda",
    modelo : 2024,
    weight : 1000,
    color : "black",       
};

console.table(car);
console.log(car.brand);
console.log(car["brand"]);

//agregar una propiedad
car["nueva-prop"] = "propiedad";
console.table(car);

//modificar el valor de una propiedad
car["nueva-prop"] = "Hola-Mundo";
console.table(car);

console.log(Object.values(car));
console.log(Object.entries(car));
const newCar = Object.assign(car); //mutacion de un objeto
console.table(newCar);