const fs = require('fs');

const a = 100;

setImmediate(() => console.log('setImmediate'));

fs.readFile('file.txt', 'utf8', (key, data) => {
    console.log('file has been read');
})

setTimeout(() => console.log('timer expired'), 0);

const printNumber = () => console.log('a is : ' , a);
printNumber();

console.log('Last line of the file');


/**
 * a is 100
 * Last line of the file
 * timer expired
 * setImmediate
 * file has been read
 * */ 