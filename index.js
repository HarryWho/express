const express=require('express');

const handlebars = require('express-handlebars').create({defaultLayout:'main'});
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname+'/public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// conect to mogodb
mongoose.connect('mongodb://localhost/nijago'); 
mongoose.Promise = global.Promise;

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

// process.env.port will liasten to the envirenment default port if hosted on a web site 
// that uses a specific port number if it does it will use it if not it will fall through 
// --> { || } to the specified port i.e 5001
app.listen(process.env.port || 5001, function(){
    console.log("Server listening on port 5001");
});