const crypto = require('node:crypto');

const a = 5000;
const b = 4000;

console.log('file loaded..');

// pbkdf = Password Based Key Derivative Function , it's a async function
crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('First key generated: ');
})

// sync function always blocks thread
crypto.pbkdf2Sync('password', 'salt', 5000000, 50, 'sha512');
console.log('Second key generated: ');

const multipication = (x, y) => x * y;
console.log('multiply is: ', multipication(a, b));