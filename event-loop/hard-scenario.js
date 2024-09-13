const fs = require('fs');

setImmediate(() => console.log('setImmediate - 1'));

setTimeout(() => console.log('timer expired - 1'), 0);

Promise.resolve('promise resolved - 1').then(console.log);

fs.readFile('file.txt', 'utf8', (key, data) => {
    setImmediate(() => console.log('setImmediate - 2'));

    setTimeout(() => console.log('timer expired - 2'), 0);

    Promise.resolve('promise resolved - 2').then(console.log);  

    process.nextTick(() => console.log('next tick printed - 2'));

    console.log('file has been read');
})


process.nextTick(() => console.log('next tick printed - 1'));




/**
 * next tick printed - 1
 * promise resolved - 1
 * timer expired - 1
 * setImmediate - 1
 * file has been read
 * next tick printed - 2
 * promise resolved - 2
 * setImmediate - 2   // This time setImmediate printed before timer because event-loop waits in Poll phase after file read, If there is nothing to execute in callstack
 * timer expired - 2
 * */ 
