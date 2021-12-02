const {tax, calculateDueSum} = require('./index');

test ('calculates tax for less than 12570 to equal 0', () => {
    expect(tax(12000)).toBe(0)
});

test ('calculates due sum for less than 40000 to equal 470253.6', () => {
    expect(calculateDueSum(40000)).toBe(470253.6)
});




// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });