const persona = {
    nombre: "Camilo",
    apellido: "Hernandez",
    age: 26,
    altura: "1.80",
    peso: "68",
    printEdad: function () {
        console.log(`La edad de ${this.nombre} es de ${this.age}`)
    }
}

persona.printEdad()