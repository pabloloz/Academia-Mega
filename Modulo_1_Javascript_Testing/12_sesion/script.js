document.getElementById("loginForm").addEventListener("submit", function(s){
    s.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const message = document.getElementById("message");
    
    // Simple validations
    if(user == "" || pass == "") {
        message.textContent = "Todos los campos son obligatorios!";
        message.style.color = "red";
        return;
    }

    if(user == "admin" && pass == "1234") {
        message.textContent = "Login Exitoso!";
        message.style.color = "green";
    } else {
        message.textContent = "Usuario o contraseña incorrectos!";
        message.style.color = "red";
    }
});