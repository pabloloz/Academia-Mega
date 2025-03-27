// var edad = 80;

// let edad1 = 50;
// const edad2 = 20;

// if (edad < 18) {
//     let edad = this.edad;
//     console.log("Eres menor de edad");
// }else if (edad >= 18 && edad < 65){
//     console.log("Eres un adulto");
// }else{
//     console.log("Eres un adulto mayor");
// }

// let numero = prompt("Ingresa un numero");
// numero = Number(numero);
// if(numero>0){
//     console.log("El numero es positivo")
// }else if (numero < 0){
//     console.log("El numero es negativo")
// }else{
//     console.log("El numero es 0")
// }

// for(let i = 1; i<=5; i++){
//     console.log("Iteracion " + i);
// }

// let contador = 1;
// while(contador <= 15){
//     console.log("Contador: " + contador);
//     contador++;
// }

// let num = prompt("Ingresa un numero");
// num = Number(num);
// if (num % 2 === 0){
//     console.log("El numero es par");
// }else{
//     console.log("El numero es impar");
// }

// let suma = 0;
// for (let i = 1; i <= 100; i++){
//     suma += i;
// }

// console.log("La suma del 1 al 100 es: " + suma);

let intentos = 0;
let claveCorrecta = "Password";
let claveIngresada;

while(intentos < 3) {
    claveIngresada = prompt("Ingrese la contraseña");

    if(claveIngresada === claveCorrecta) {
        console.log("Acceso concedido.");
        break;
    } else {
        console.log("Contraseña incorrecta");
    }
    intentos++;
}

if(intentos === 3) {
    console.log("Has agotado tus intentos");
}