// 1
const a = "Hello";
const b = "World";

console.log(`${a} ${b}`)


// 2
const multiply = (a, b = 1) => a * b


// 3
const average = (...Array) => Array.reduce((sum, val) => sum + val) / Array.length


// 4
const grades = [1,5,5,5,4,3,3,2,1];
average(...grades);

// 5
[ , ,firstname, , lastname] = [1, 4, 'Iwona', false, 'Nowak']