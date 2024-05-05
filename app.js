const express = require('express');
const morgan = require('morgan'); // middleware
const monoose = require('mongoose'); // mongoose
const blogRoutes = require('./routes/blogRoutes');
const { render } = require('ejs');


// express app

const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://netninja:AApj7OmLZqBI9NLn@learnmongodb.mizuxcq.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=learnmongodb'
monoose.connect(dbURI)
    .then((result) => {
        console.log('connected to db');
        // listen for requests
        app.listen(3000);
    })
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs'); // this looks for a folder called views in the root directory and


//middleware & static files
app.use(express.static('public')); // this is a middleware that serves static files
app.use(express.urlencoded({extended: true})); // this is a middleware that parses urlencoded data
app.use(morgan('dev')); // this is a middleware that logs the request to the console


app.get('/', (req, res) => {
    res.redirect('/blogs');

});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
    
});

// blog routes
app.use('/blogs',blogRoutes);

// 404 page, must be at the end of the file
app.use((req, res) => {
    res.status(404).render('404' , {title: '404 issue'} );
});