const fs = require('fs');

const a = 100;

setImmediate(() => console.log('setImmediate'));

Promise.resolve('promise resolved').then(console.log);

fs.readFile('file.txt', 'utf8', (key, data) => {
    console.log('file has been read');
})

setTimeout(() => console.log('timer expired'), 0);

process.nextTick(() => console.log('next tick printed'));

const printNumber = () => console.log('a is : ' , a);
printNumber();

console.log('Last line of the file');


/**
 * a is 100
 * Last line of the file
 * next tick printed
 * promise resolved
 * timer expired
 * setImmediate
 * file has been read
 * */ 