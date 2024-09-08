// const { str, calculateSum } = require('./calculate/sum');
// const { calculateMultiply } = require('./calculate/multiply');
const { str, calculateSum, calculateMultiply } = require('./calculate');

let a = 10;
a = 50;
let b = 30;
b= 4;

console.log('_filename..', __filename);  // __filename & __dirname are a param in wrap IIFE function
console.log('_dirname..', __dirname);

console.log('str..', str);
console.log('sum..', calculateSum(a, b));
console.log('multiply..', calculateMultiply(a, b));