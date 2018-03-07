const express=require('express');
const app=express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'})

app.use(express.static(__dirname+'/Public'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.listen('5001', function(){
    console.log("Server listening on port 5001");
});