const usuario = {
    nombre: "Pablo",
    edad: 26,
    ciudad: "Guadalajara"
}

const usuarioJSON = JSON.stringify(usuario);
console.log("JSON en Texto: ", usuarioJSON);

// const usuarioObjeto = JSON.parse(usuarioJSON);
// console.log("JSON objeto: ", usuarioObjeto.nombre);

localStorage.setItem("usuario", usuarioJSON);

const datosGuardados = localStorage.getItem("usuario");
const datosObjeto = JSON.parse(datosGuardados);
console.log(datosObjeto);
console.log(datosObjeto.nombre);

//localStorage.removeItem("usuario");