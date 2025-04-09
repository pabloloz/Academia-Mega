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

function sumer(a, b) {
    return a + b;
}

expect(sumer(2, 3)).toBe(5);
expect(sumer(10, 0)).toBe(10);