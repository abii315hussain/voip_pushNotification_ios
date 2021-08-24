var express =require('express');
var cors =require('cors');
var bodyparser= require('body-parser');
const { request, response, query } = require('express');
var apn = require('apn');
const {RtcTokenBuilder, RtcRole} = require('agora-access-token');

const http = require('http');

// use 
var app= express();
app.use(cors());
app.use(bodyparser.json());

// require folder

const port=require('./db/server')


// app.get('/',(req,res)=>{
//     res.send(req.body.name);
// })
app.get('/', 

function  (req, res, next) {

    var options = {
      cert: __dirname+'/cert.pem',
      key: __dirname+'/key.pem'
    };
    var apnConnection = new apn.Connection(options);

    var myDevice = new apn.Device("a967c50f99ff5135d1fc81790fc99af0374003029b7f566ef61a5fc86a4e44b4");

    var note = new apn.Notification();

    note.expiry = Math.floor(Date.now() / 1000) + 3600;
    note.sound = __dirname + '/ringtone.mp3';
    note.alert = "\uD83D\uDCE7 \u2709 You have a new message";
    note.payload = {'messageFrom': 'Caroline'};
    apnConnection.pushNotification(note, myDevice);

    return res.json({success: "true"});
}

);


;

// Server listen on
app.listen(port,()=>{
    console.log("sever is running....");
});

app.use((req,res)=>{
    res.status(404).json({status:404,msg:"Invalid Request "})
})



