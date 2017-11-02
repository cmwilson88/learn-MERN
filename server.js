'use strict'

const bodyParser = require('body-parser'),
      mongoose   = require('mongoose'),
      express    = require('express'),
      router     = express.Router(),
      config     = require('./config'),
      app        = express();

const Comment = require('./model/comments');
const port = process.env.API_PORT || 3001;

var mongoDB = `mongodb://${config.DB_USER}:${config.DB_PASS}@ds243325.mlab.com:43325/mern-crud-11-1-17`;
mongoose.connect(mongoDB, {useMongoClient: true})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
   //and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'API initialized'})
})

app.use('/api', router)

app.listen(port, function() {
    console.log(`api running on port ${port}`)
})