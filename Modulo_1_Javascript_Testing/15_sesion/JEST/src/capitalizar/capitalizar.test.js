const capitalizar = require("./capitalizar");

test("Capitalizar hola -> Hola", ()=>{
    expect(capitalizar("hola")).toBe("Hola");
})

test("capitalizar JAVASCRIPT -> Javascript", ()=>{
    expect(capitalizar("JAVASCRIPT")).toBe("Javascript");
})