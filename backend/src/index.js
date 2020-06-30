const express = require ('express');
const cors = require ('cors');
const multer = require ('multer');
const fs = require ('fs');
const { insert, select } = require('./database/database');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/create/account', async function (req, res){
    const { account } = req.body; 
    if ( account ) {
        //add hashing password
        res.send (
            await insert ('accounts', Object.keys(account), Object.values(account))
                .then( function ( result ) { return result; } )
                .catch( function ( error ) { return error; } )
        );
    } 
    else {
        res.send ( {
            code: 400,
            message: 'Missing account info'
        });
    }   
});

app.post('/create/movie', async function (req, res){
    const { movie } = req.body; 
    if ( movie ) {
        res.send (
            await insert ('movies', Object.keys(movie), Object.values(movie))
                .then( function ( result ) { return result; } )
                .catch( function ( error ) { return error; } )
        );
    } 
    else {
        res.send ( {
            code: 400,
            message: 'Missing movie info'
        });
    }   
});

app.post('/create/review', async function (req, res){
    const { review } = req.body; 
    if ( review ) {
        res.send (
            await insert ('reviews', Object.keys(review), Object.values(review))
                .then( function ( result ) { return result; } )
                .catch( function ( error ) { return error; } )
        );
    } 
    else {
        res.send ( {
            code: 400,
            message: 'Missing review info'
        });
    }   
});

const upload = multer({
    dest: __dirname + '/database/images/'
  });
app.post('/upload/:movieName', upload.single('file'), function (req, res){
    const tempPath = req.file.path;
    const targetPath = __dirname + `/database/images/${req.params.movieName}`;

      fs.rename(tempPath, targetPath, err => {
        if (err) res.send(err);

        res
          .status(200)
          .contentType("text/plain")
          .end("File uploaded!");
      });
});


app.get('/images/:image', function (req, res){
    res.sendFile (`./database/images/${req.params.image}`, { root: __dirname });
});

app.get('/login', async function (req, res){
    const { userName, password } = req.body;
    if ( userName && password ) {
        let account = await select ('accounts', 'userName', `userName="${userName}" AND passwordHash="${password}"`)
            .then(function ( result ) {return result; } )
            .catch( function ( error ) { res.send ( error ); } );
        if ( account && account[0] ) {
            delete account[0].passwordHash;
            res.send ( account[0] );
        }
        else {
            res.send ( {
                code: 400,
                message: 'Incorrect login information'
            });
        } 
    }
    else {
        res.send ( {
            code: 400,
            message: 'Missing username or password'
        });
    }
});

app.get('/movies', async function (_, res){ 
    const movies = await select ('movies', 'name')
        .then(function ( result ) {return result; } )
        .catch( function ( error ) { res.send ( error ); } );
    res.send( movies );
});


app.get('/movies/search/:name', async function (req, res){
    const { name } = req.params;
    if ( name ) {
        const movies = await select ('movies', 'name', `name LIKE "%${name}%"`)
            .then(function ( result ) {return result; } )
            .catch( function ( error ) { res.send ( error ); } );
            res.send ( movies );
    }
    else {
        res.send ( {
            code: 400,
            message: 'Missing movie name'
        });
    }
});




app.listen(port, console.info(`Listening at http://localhost:${port}`));

