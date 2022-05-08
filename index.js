const {startMining, stopMining} = require('./mine');
const {PORT} = require('./config');
const {utxos, blockchain} = require('./db');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const {method, params} = req.body;
    if(method === 'startMining') {
        startMining();
        res.send({ blockNumber: blockchain.blockHeight() });
        return;
    }
    if(method === 'stopMining') {
        stopMining();
        res.send({ blockNumber: blockchain.blockHeight() });
        return;
    }   
  });

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});