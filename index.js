const MusicBot = require("./src/structures/MusicClient");
const client = new MusicBot();

const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log('Your app is listening a http://localhost:${port}')
);

client.connect()

module.exports = client; 
