var express = require('express');
//var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');

var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app)


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var csrfProtection = csrf({cookie:true});
app.use(cookieParser());
var unirest = require('unirest');


/////////////////////////////////////////
//Started
/////////////////////////////////////////
app.get('/get',function(req,res){
  var data_transactions;
  var data_sort;
  var data_sort_ten = [];

  unirest.get('https://testnet.blockexplorer.com/api/addr/mzJDNGyyE6HFVoZAFB82ZVX74kmFcTPey4',function(req,res){
    var dataX= req.raw_body;
    //console.log(req.body);

    //view transactions OK
    //console.log(req.body.transactions);
    data_transactions = req.body.transactions;
    //dataX.push(req.raw_body);

    data_sort = data_transactions;
    // console.log("All = ",data_sort.length); //จำนวนทั้งหมด
    // console.log("All = ",data_sort.length - 10); //จำนวนทั้งหมด -10

    console.log("###############################################################");
      data_sort_ten.push(data_sort[165]); //เอาข้อมูลใน array ของ arr1 เข้าไปใน totalX
      data_sort_ten.push(data_sort[166]); //เอาข้อมูลใน array ของ arr1 เข้าไปใน totalX
      data_sort_ten.push(data_sort[170]); //เอาข้อมูลใน array ของ arr1 เข้าไปใน totalX
      data_sort_ten.push(data_sort[169]); //เอาข้อมูลใน array ของ arr1 เข้าไปใน totalX
      data_sort_ten.push(data_sort[168]); //เอาข้อมูลใน array ของ arr1 เข้าไปใน totalX
      data_sort_ten.push(data_sort[167]); //เอาข้อมูลใน array ของ arr1 เข้าไปใน totalX
      data_sort_ten.push(data_sort[173]); //เอาข้อมูลใน array ของ arr1 เข้าไปใน totalX
      data_sort_ten.push(data_sort[172]); //เอาข้อมูลใน array ของ arr1 เข้าไปใน totalX
      data_sort_ten.push(data_sort[171]); //เอาข้อมูลใน array ของ arr1 เข้าไปใน totalX
      data_sort_ten.push(data_sort[164]); //เอาข้อมูลใน array ของ arr1 เข้าไปใน totalX

      console.log("All 10  = \n",data_sort_ten);
  });
  setTimeout(function(){
    var sort_x = [];
    console.log("get OK");
    var data2;

    unirest.get('https://testnet.blockexplorer.com/api/tx/f406755db24f11343184cf60135610ab6e06e384f87568269274d6705ea55a67',function(req,res){
      //var dataX= req.raw_body;
      data2 = [
        {"txid" : req.body.txid,
        "time" : req.body.time},
      ]
      console.log("\n");
      sort_x.push(data2);
      console.log(data2);
      //dataX.push(req.raw_body);
    });


  },1000);
  return;
});

app.get('/get2',function(req,res){
  var data2;
  unirest.get('https://testnet.blockexplorer.com/api/tx/34862264c23b471a8b2e7199e2b3d477bff72cf526d0bffb6b2de83ff6f596a2 ',function(req,res){
    //var dataX= req.raw_body;
    data2 = [
      {"txid" : req.body.txid,
      "time" : req.body.time},
    ]
    console.log(data2);
    //dataX.push(req.raw_body);
  });

  setTimeout(function(){
    console.log("get OK");
  },1000);
  return;
});



//RUN SERVER
app.listen(3000,function(){
  console.log('\n Server Started on localhost:3000...\n');
});
