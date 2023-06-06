import { MongoClient } from 'mongodb';
import url from './atlas_url.js';

console.log(url);

const client = new MongoClient(url)
const dbName = 'bank'

const connectToDatabase = async () => {
    try {
        await client.connect()
        console.log(`IT's conneted to ${dbName} database`)
    } catch (error) {
        console.error('Error conneting to database', error)
    }
}

const main =  async () =>{
    try {
        await connectToDatabase()
    } catch (error) {
        console.error('Error conneting to database', error)
    }
}

main();

