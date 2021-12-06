const {tax, calculateDueSum} = require('./index');

test ('calculates tax for less than 12570 to equal 0', () => {
    expect(tax(12570)).toBe(0)
});

test ('calculates tax for less than 40000  to equal 5486', () => {
    expect(tax(40000)).toBe(5486)
});

test ('calculates dueSum for 40000 to equal 34514', () => {
    expect(actualIncome(40000)).toBe(34514)
});



