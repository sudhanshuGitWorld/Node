const { MongoClient }  = require('mongodb');

const URI = 'mongodb+srv://developersudhanshush:6is3VHfzIG1nw2jD@namastenode.jzksi.mongodb.net/';
const client = new MongoClient(URI);
const db_name = 'Hello_World';

const main = async () => {
    await client.connect();
    console.log('connected successfully');
    const db = client.db(db_name);
    const collection = db.collection('user');
    console.log('collection: ', collection);
    return 'done';
}

main()
    .then((data) => console.log('data..', data))
    .catch(err => console.log('err..', err))
    .finally(() => client.close());