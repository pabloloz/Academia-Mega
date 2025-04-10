function expect(actual) {
    return {
        toBe(expected) {
            if (actual === expected) {
                console.log(`pass: ${actual} == ${expected}`);
            } else {
                console.log(`faila: as superabs ${expected}, pero se obtuvo ${actual}`);
            }
        },
        toEqual(expected) {
            const passed = JSON.stringify(actual) === JSON.stringify(expected);
            if (passed) {
                console.log('pass: Objetos iguales');
            } else {
                console.log('failó: Objetos diferentes');
            }
        }
    };
}

function sumar(a, b) {
    return a + b;
}

function validarUsuario(usuario) {
    return usuario.nombre && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.correo);
}

const usuarioValido = { nombre: "Ana", correo: "ana@mail.com" };
const usuarioValido2 = { nombre: "Ana2", correo: "ana@mail.com" };
const usuarioInvalido = { nombre: "Pablo", correo: "Pablo@mail" };

expect(usuarioValido).toEqual(usuarioValido2);
// expect(validarUsuario(usuarioInvalido)).toBe(false);