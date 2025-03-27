// //Funcion declarativa
// saludar("Pablo");

// function saludar(nombre){
//     console.log(`Hola, ${nombre}`)
// }

// //Función anonima
// let saludar1 = function(nombre){
//     console.log(`Hola, ${nombre}`)
// }
// saludar1("Pablo");

// //Función flecha
// let saludar2 = (nombre)=>  console.log(`Hola, ${nombre}`)
// saludar2("Pablo");

// //Funcion declarativa
// function sumar(a, b){
//     return a + b;
// }
// console.log(sumar(5,7));

// //Función anonima
// const restar = function(a,b){
//     return a - b;
// }
// console.log(restar(8,4));

// const sumar1 = (a,b) =>{
//     let resultado = a+b;
//     return resultado;
// }
// console.log(sumar1(5,7));

// let numero;

// let mensajeGlobal = "Hola desde fuera";

// function ejemploScope(numero){
//     numero--;

//     let mensajeLocal = "Hola desde dentro";
//     console.log(mensajeGlobal);
//     console.log(mensajeLocal);
//     console.log(numero);
// }

// numero = 2;
// ejemploScope(numero);
// console.log(mensajeGlobal);
// console.log(numero);
// // console.log(mensajeLocal);


function contador(){
    let cuenta = 0;
    return function(){
        cuenta++;
        return cuenta;
    }
}

const incrementar = contador();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());

//Ejercicio
//Crea una función que devuelva otra función que multiplica por un número especifico

function multiplicar(factor){
    return function(numero){
        return numero * factor;
    }
}
const cuadruplicar = multiplicar(4);

console.log(duplicar(8));

