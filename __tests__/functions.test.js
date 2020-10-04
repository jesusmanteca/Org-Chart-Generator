const functions = require('../lib/functions');

test('Adds two numbers together to give the right sum', () => {
    expect(functions.add(2, 3)).toBe(5)
})