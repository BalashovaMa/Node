const mult = require('./mult')

test('should multiply 5 and 10 and return 50', () => {
    expect(mult(5, 10)).toBe(50)
})

test('should multiply 4 and 2 and return 8', () => {
    expect(mult(4, 2)).toBe(8)
})