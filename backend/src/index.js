const express = require ('express');
const cors = require ('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', function (_, res){
    res.send ('Not Implemented');
});

app.listen(port, console.info(`Listening at http://localhost:${port}`));

