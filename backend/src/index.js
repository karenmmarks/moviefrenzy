const express = require ('express');
const cors = require ('cors');
const accounts = require('./test-data/accounts');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', function (_, res){
    res.send (accounts[0]);
});

app.listen(port, console.info(`Listening at http://localhost:${port}`));

