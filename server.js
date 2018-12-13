// var request = require('request');
let fetch = require('node-fetch');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var striptags = require('striptags');

// app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));//через express.static мы подключаем стили, точнее даем возможность клиенту подкючить и использовать стили в этой папке
// app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));//так же само даем клиенту возможность подключить стили бутстрапа.

async function getClients() {
    try {
        let res = await fetch('https://www.potterapi.com/v1/houses?key=$2a$10$BD8PoevCo5yISOJlHy47geFYut1/qYjjtKHLQeHW2ZUD.3RndOJXa');
        // let res = await fetch("./clients.json");
        console.log(res);
        let data = await res.json();
        console.log(data);
        return data;
    } catch{
        throw new Error("Чтото не так с запросом!!!");
    }

}

app.get('/', function (req, res) {
    (async function () {
        try {
            let data = await getClients();
            res.send(data);
        } catch (error) {
            console.log(error);
        }
    })();

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
app.get('/search', function (req, res) {
    // res.render('index', {objData: "Поиск..."});  
    // console.log(req.body.lat, req.body.lng);
    // res.send(JSON.stringify({response: req.params.lat}));
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.params.lat, req.params.lng);
    res.send(JSON.stringify({ lat: req.params.lat, lng: req.params.lng }));

});

app.listen(3333, function () {
    console.log('Server started at localhost:3333');
});