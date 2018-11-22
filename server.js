var request = require('request');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var striptags = require('striptags');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));//через express.static мы подключаем стили, точнее даем возможность клиенту подкючить и использовать стили в этой папке
// app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));//так же само даем клиенту возможность подключить стили бутстрапа.



app.get('/', function (req, res) {    
    res.render('index', {objData: "Поиск..."}); 
    // res.end("http://localhost:3333/");   
});

// app.post('/search', function (req, res) {
//     var lat = req.body.lat;
//     var lng = req.body.lng;

//     request(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=50&key=AIzaSyAGBONIz-nYIgKCtdPt373jsPCBA42d1Fc`, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var data = JSON.parse(body)
//         console.log(data);
//         if(data.results[0]){
//             res.render('index', {objData: data.results[0].name});
//         }else{
//             res.render('index', {objData: "Что-то не так с запросом!!!"});
//         }
        

//     } else {
//         console.warn(error);
//     }
// });
    


    
// });
app.post('/search', function (req, res) {   
    // res.render('index', {objData: "Поиск..."});  
    console.log(req.body.lat, req.body.lng);  
    res.json({response: req.body.lat});
});

app.listen(3333, function () {
    console.log('Server started at localhost:3333');
});