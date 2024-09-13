const fs = require('fs');
const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 5;  // by default size is 4 but we increased thread pool size for Key - 5

crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('Key - 1');
})
crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('Key - 2');
})
crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('Key - 3');
})
crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('Key - 4');
})

crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('Key - 5');
})
fs.readFile('file.txt', 'utf-8', (key, data) => {
    console.log('file has been read successfully')
})