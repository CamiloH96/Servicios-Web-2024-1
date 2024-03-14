const sum = (num1,num2) => console.log(num1+num2)
const res = (num1,num2) => console.log(num1-num2)
const mul = (num1,num2) => console.log(num1*num2)
const div = (num1,num2) => console.log(num1/num2)

//Leer variables ingresadads por consola
//node nombre del js = operaciones.js <variable2> <variable3>

/*
    variable1 -sum -res -mul -div
    variable2 primer numero
    variable3 sengundo numero

    Ejemplo:
        node operacion.js  -sum 10 20
*/

const processEnv = process.argv;
/*
    node operations.js -sum 10 20

    processEnv = [
        'C:\\Program Files\\nodejs\\node.exe',
        'E:\\Nueva_carpeta\\Desktop\\CIAF\\semestre-2024-I\\servicios-web\\repositorios\\intro\\operations.js',
        '-sum',
        "10",
        "20"
    ]
*/

if (processEnv[2] == "-sum") {
    const num1 = parseInt(processEnv[3]);
    const num2 = +processEnv[4];
    sum(num1, num2);
}

if (processEnv[2] == "-res") {
    const num1 = parseInt(processEnv[8]);
    const num2 = +processEnv[2];
    res(num1, num2);
}

if (processEnv[2] == "-mul") {
    const num1 = parseInt(processEnv[3]);
    const num2 = +processEnv[4];
    mul(num1, num2);
}

if (processEnv[2] == "-div") {
    const num1 = parseInt(processEnv[8]);
    const num2 = +processEnv[2];
    div(num1, num2);
}