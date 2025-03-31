// const titulo = document.getElementById("titulo");
// const parrafos = document.getElementsByClassName("parrafo");

// console.log(titulo.textContent);

// titulo.textContent = "Bienvenidos a mi página web";
// parrafos.style.color = "blue"

document.getElementById("cambiarTexto").addEventListener("click", function(){
    document.getElementById("titulo").textContent = "Texto modificado";
})

document.getElementById("boton").addEventListener("click", function(){
    document.getElementById("resultado").textContent = "Botón cliqueado";
});

const hoverTexto = document.getElementById("hoverTexto");

hoverTexto.addEventListener("mouseover", function(){
    hoverTexto.style.color = "red";
});

hoverTexto.addEventListener("mouseout", function(){
    hoverTexto.style.color = "black";
});