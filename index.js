const express=require('express');
const app=express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'})
const index = require('./routes/index');

app.use(express.static(__dirname+'/public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use('/', index);


app.listen('5001', function(){
    console.log("Server listening on port 5001");
});