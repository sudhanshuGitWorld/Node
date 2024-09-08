const fs = require('fs');
const https = require('https');

https.get('https://dummyjson.com/products/1', (res) => {
    console.log('res..', res?.secret)
    // res.then((data) =>  console.log('data..', data.json()));
})

setTimeout(() => {
    console.log('timer is out')
}, 5000);

fs.readFile('file.txt', 'utf-8', (err, data) => {
    console.log('file data...', data);
})