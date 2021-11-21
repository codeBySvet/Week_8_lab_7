const express = require('express')  //Need express to run the server
const app = express()
const port = 4000   //Designate which port for the server to listen on
const bodyParser = require('body-parser');  //bodyparser will go parse through HTTP messages 
const mongoose = require('mongoose');   //importing mongoose library


//This is to handle cors error
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//  Connecting to MongoDB database
//const ConnectionString = 'mongodb+srv://admin:admin@cluster0.8taek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const ConnectionString = "mongodb+srv://anshlom4321:anshlom4321@cluster0.mfk7y.mongodb.net/movies?retryWrites=true&w=majority";
mongoose.connect(ConnectionString, { useNewUrlParser: true });

//Generating schema to control what the documents will look like/be structured
const Scheme = mongoose.Schema;
var movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String
})
var MovieModel = mongoose.model("movie", movieSchema);


//Json get requst/response for /
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//Json get requst/response for /hello
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})
//Json get requst/response for /whatever
app.get('/whatever', (req, res) => {
    res.send('cool!')
})

//Json post requst/response for /api/movies
app.post('/api/movies', (req, res) => {
    console.log("Title: " + req.body.Title)
    console.log("Year: " + req.body.Year)
    console.log("Poster: " + req.body.Poster)

    //Creates documents in the mongo db database
    MovieModel.create({
        title: req.body.Title,
        year: req.body.Year,
        poster: req.body.Poster
    })

    //This sends a messaage back to ensure items added to the database are not added
    //multiple times by mistake
    res.send("Item Added");
})


//Json requst/response for /api.movies.
app.get('/api/movies', (req, res) => {

    //Find all records in the database and return
    MovieModel.find((err,data)=>{
        res.json(data)
    })
})

//Json requst/response for /api.movies/:id finding by ID
app.get('/api/movies/:id', (req, res) => {

    MovieModel.findById(req.params.id,(err,data)=>{
        res.json(data)
    })
})

//Json PUT method for specific movie to replace movie data
app.put("/api/movies/:id", (req,res)=>{
    MovieModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
      (err,data)=>{
          if(err){
            console.log(err)
          }
        res.send(data);
      } )

})

//Json get requst/response for /name
app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.firstname + ' ' + req.query.lastname);
})
//Json post requst/response for /name
app.post('/name', (req, res) => {
    res.send('Goodbye ' + req.body.firstname + ' ' + req.body.lastname);
})
//Json get requst/response for /test
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
//Tells the server to listn on a port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})