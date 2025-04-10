const UserSingleton = (function() {
    let instance = null;

    function createInstance(name) {
        return {
            name: name,
            loginTime: new Date().toLocaleString()
        };
    }

    return {
        getInstance(name) {
            if (!instance) {
                instance = createInstance(name);
            }
            return instance;
        },
        clearInstance() {
            instance = null;
        }
    };
})();