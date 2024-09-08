const crypto = require('node:crypto');

const a = 5000;
const b = 4000;

console.log('file loaded..');

// pbkdf = Password Based Key Derivative Function , it's a async function
crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('First key generated: ');
})

// Read below comment, very imp concept with 0 sec.
setTimeout(() => {
    console.log('call me now')
}, 0);

// sync function always blocks thread
crypto.pbkdf2Sync('password', 'salt', 5000000, 50, 'sha512');
console.log('Second key generated: ');

const multipication = (x, y) => x * y;
console.log('multiply is: ', multipication(a, b));




// Output
/* 
1. file loaded.. (it prints firstly because it came first in callstack) 
2. Second key generated: (it prints secondly because pbkdf2Sync is a synchronous function so it comes 2nd position in callstack)
3. multiply is:  20000000: (it prints third because it is also synchronous but it is wriiten after pbkdf2Sync function)

// V.IMP Point for dealy 0sec
4. call me now 
(it prints fourth number, even the delay time is 0 sec. The reason is js engine count 0 sec only, when 
callstack will be empty. once js engine read whole file and run all synchronous code then it checks that the callstack
is empty or not if it is empty then it counts 0 sec and push the setTimeout. Because in actually, setTimeout is a
asynchronous. It doesn't mean that 0 sec means call it right away, it counts 0sec only once callstack will be empty).

5. First key generated: (it prints fifth because it is async function and prints at the last, once all synchronous code runs)
*/