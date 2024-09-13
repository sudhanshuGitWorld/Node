const fs = require('fs');

setImmediate(() => console.log('setImmediate'));

setTimeout(() => {
    fs.readFile('file.txt', 'utf8', (key, data) => {
        console.log('file read second time')
    })
    console.log('timer expired')
}, 0);

Promise.resolve('promise resolved').then(console.log);

fs.readFile('file.txt', 'utf8', (key, data) => {
    console.log('file has been read');
    process.nextTick(() => {
        setTimeout(() => console.log('timer expired-2'), 1000);  
        console.log('fs nextTick')
    })
})

process.nextTick(() => {
    process.nextTick(() => console.log('inner nextTick'));
    console.log('nextTick')
});



// One level nested event loop working

// setTimeout(() => {
//     process.nextTick(() => {
//         process.nextTick(() => console.log('inner nextTick'));
//         console.log('nextTick')
//     });
// }, 0)



// Multi level nested event loop working

// fs.readFile('file.txt', 'utf8', (key, data) => {
//     setImmediate(() => {
//         setTimeout(() => {
//             Promise.resolve('promises').then(console.log);
//             process.nextTick(() => {
//                 process.nextTick(() => {
//                     console.log('tick tick 2')
//                 })
//                 console.log('tick tick 1')
//             })
//             console.log('now timer expired')
//         }, 1000)
//         console.log('immediate')
//     })
//     console.log('file readed')
// })
