

console.log('Server-side code running');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const MongoClient = require('mongodb').MongoClient;

flatted = require('flatted'); // use this one or the one below
circularJSON = require('circular-json');

//app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
    next();
});


// serve files from the public directory
app.use(express.static('public'));
//app.use(express.json())    // <==== parse request body as JSON

// connect to the db and start the express server
let db;

// Replace the URL below with the URL for your database
const url =  'mongodb+srv://dbJema:3-Function2022@cluster0.vw53i.mongodb.net/clicks?retryWrites=true&w=majority';


MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log(err);
    }
    db = client.db("clicks");
    // start the express web server listening on 8080
    app.listen(8080, () => {
        console.log("listening on 8080");
    });
});




// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


// add a document to the DB collection recording the click event
app.post('http://localhost:8080/clicked', function(req, res){


    // <==== req.body will be a parsed JSON object
    const clickedE = circularJSON.stringify(res.json({requestBody: req.body}));


    //response.send(request.body


    //console.log(request.body);      // your JSON

    const click = {clickTime: new Date(),
        clickedElement: clickedE};

    // response.send(request.body);    // echo the result back

    //click = circularJSON.stringify(clicked);
    console.log(click);
    console.log(db);

    if (!req.body.click) {
        return res.status(400).json({
            status_code: 0,
            error_msg: "Require Params Missing",
        });
    }

    res.status(200).json({
        status_code: 1,
        data: req.body,
    });


    db.collection('clicks').insertOne(click, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log('click added to db');
        res.sendStatus(201);
    });

});
/*
// get the click data from the database
app.get('http://localhost:8080/clicks',async (req, res) => {
    await db.collection('clicks').find().toArray((err, result) => {
        //await Click.find().toArray((err, result) => {
        if (err) return console.log(err);
        res.send(result);
    });
});

 */


