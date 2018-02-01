var express = require ('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

// create application/json parser
var jsonParser = bodyParser.json()

//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false})

//parse various different custom JSON
app.use(bodyParser.json({type: 'application/*+'}))

app.use(bodyParser.raw ({type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({type: 'text/html'}))

app.listen(PORT, function(){
    console.log("app listening on PORT: "+PORT);
});