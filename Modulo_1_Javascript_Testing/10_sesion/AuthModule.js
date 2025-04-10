const AuthModule = (function() {
    // Simular usuario
    const userOB = {
        username: "admin",
        password: "1234"
    };

    let currentUser = null;

    return {
        login(username, password) {
            if (username === userOB.username && password === userOB.password) {
                currentUser = UserSingleton.getInstance(username);
                console.log(`Usuario Autenticado: ${currentUser.name}`);
            } else {
                console.log("Credenciales Incorrectas");
            }
        },
        logout() {
            if (currentUser) {
                console.log(`Hasta Luego, ${currentUser.name}`);
                currentUser = null;
                UserSingleton.clearInstance();
            } else {
                console.log("No hay usuario autenticado");
            }
        }
    };
})();