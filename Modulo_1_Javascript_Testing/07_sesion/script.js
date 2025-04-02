function obtenerusuario(id){
    try{
        if(typeof id !== "number") throw new Error("El ID debe ser un número");
        const usuarios = {1: "Ana", 2: "Carlos", 3: "Marta"};
        if(!usuarios[id]) throw new Error("Usuario no encontrado");
        
        return `Usuario encontrado: ${usuarios[id]}`;
    }catch(error){
        console.error("Error: ", error.message);
        return null;
    }
}

console.log(obtenerusuario(1));
console.log(obtenerusuario(2));
console.log(obtenerusuario(3));
console.log(obtenerusuario(4));
console.log(obtenerusuario("x"));