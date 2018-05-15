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
  var Json_10;

  unirest.get('https://testnet.blockexplorer.com/api/addr/mzJDNGyyE6HFVoZAFB82ZVX74kmFcTPey4',function(req,res){
    var dataX= req.raw_body;
    data_transactions = req.body.transactions;
    data_sort = data_transactions;
    console.log("###############################################################");
      var A1 = data_sort[165];
      var A2 = data_sort[166];
      var A3 = data_sort[170];
      var A4 = data_sort[169];
      var A5 = data_sort[168];
      var A6 = data_sort[167];
      var A7 = data_sort[173];
      var A8 = data_sort[172];
      var A9 = data_sort[171];
      var A10 = data_sort[164];

  data_sort_ten.push(A1); //เอาข้อมูลใน array ของ arr1 เข้าไปใน
  data_sort_ten.push(A2); //เอาข้อมูลใน array ของ arr1 เข้าไปใน
  data_sort_ten.push(A3); //เอาข้อมูลใน array ของ arr1 เข้าไปใน
  data_sort_ten.push(A4); //เอาข้อมูลใน array ของ arr1 เข้าไปใน
  data_sort_ten.push(A5); //เอาข้อมูลใน array ของ arr1 เข้าไปใน
  data_sort_ten.push(A6); //เอาข้อมูลใน array ของ arr1 เข้าไปใน
  data_sort_ten.push(A7); //เอาข้อมูลใน array ของ arr1 เข้าไปใน
  data_sort_ten.push(A8); //เอาข้อมูลใน array ของ arr1 เข้าไปใน
  data_sort_ten.push(A9); //เอาข้อมูลใน array ของ arr1 เข้าไปใน
  data_sort_ten.push(A10); //เอาข้อมูลใน array ของ arr1 เข้าไปใน

  console.log("data_sort_ten == ",data_sort_ten.length);
  //console.log("data_sort_ten == ",data_sort_ten[2]);
      console.log("\n");
      console.log("All 10  = \n",data_sort_ten);
  });

  var sort_x = [];

    unirest.get('https://testnet.blockexplorer.com/api/tx/34862264c23b471a8b2e7199e2b3d477bff72cf526d0bffb6b2de83ff6f596a2 ',function(req,res){
      //var dataX= req.raw_body;
      var dataJ ={
        txid : req.body.txid,
        time : req.body.time
      };

      sort_x.push(dataJ);

      console.log(sort_x[0]);
      //dataX.push(req.raw_body);
    });

    unirest.get('https://testnet.blockexplorer.com/api/tx/fe2ac15767905041726d226ff0b2fe67b90490daf57bc1106974d217b044083b',function(req,res){
      //var dataX= req.raw_body;
      var dataJ ={
        txid : req.body.txid,
        time : req.body.time
      };

      sort_x.push(dataJ);

      console.log(sort_x[1]);
      //dataX.push(req.raw_body);
    });

});

app.get('/get2',function(req,res){
  data_10 = [];
  arr2 = [];
    var A1 = "https://testnet.blockexplorer.com/api/tx/34862264c23b471a8b2e7199e2b3d477bff72cf526d0bffb6b2de83ff6f596a2";
    var A2 = "https://testnet.blockexplorer.com/api/tx/b3d6b0318b2e1c96710b329c28f1bb3e64c6069ded8c378398ff7fe6bf8db75e";
    var A3 = "https://testnet.blockexplorer.com/api/tx/67455345c850ece8da18a3f2e14360f764aed727572b6f89c905072f813f576b";
    var A4 = "https://testnet.blockexplorer.com/api/tx/b3928f2be03fc461c0b09611b1a9a48183aaffe574a87ca6613d454ee0e3af20";
    var A5 = "https://testnet.blockexplorer.com/api/tx/d372f8a2369d9c8a42af4ca7a1f8c82b4a3c2a72f7b5a83d42dc9f48c0327fc5";
    var A6 = "https://testnet.blockexplorer.com/api/tx/55ff8b0a547281c3b3da1d3fc6b8427ae49651025d82b8a0ac7be2f4062d1a13";
    var A7 = "https://testnet.blockexplorer.com/api/tx/8f5fef9a35050b036e36d41f7fa43e95227c0a5941ab60946dec2f5478e3a74f";
    var A8 = "https://testnet.blockexplorer.com/api/tx/10e17bd990a4313b473882779e70ca9e72da39db5086d6f703e7778aa1ce4749";
    var A9 = "https://testnet.blockexplorer.com/api/tx/4fa1e1257dd5f180e175082d40ac1cbd7e4e24dc481ef9f6d5befa88320bd70d";
    var A10 = "https://testnet.blockexplorer.com/api/tx/6afe7a50ef8c4f582877ba6b7cf068f1c8f03cec5bea97a4c3ed725b182d55ec";
      arr2.push(A1);
      arr2.push(A2);
      arr2.push(A3);
      arr2.push(A4);
      arr2.push(A5);
      arr2.push(A6);
      arr2.push(A7);
      arr2.push(A8);
      arr2.push(A9);
      arr2.push(A10);



    for(var i = 0; i < arr2.length; i++){ //นับว่าใน arr1 มีข้อมูลใน array กี่ตัว แล้วทำ loop ตามจำนวนนั้น
      //console.log(arr2[i]);
      unirest.get(arr2[i],function(req,res){
        //var dataX= req.raw_body;
        var dataJ ={
          txid : req.body.txid,
          time : req.body.time
        };
        data_10.push(dataJ);
        console.log(dataJ);
        //dataX.push(req.raw_body);
      });
    }


    setTimeout(function(){
      var totalX = [];

      console.log("-----------------------------------------------------------");
      for(var i = 0; i < data_10.length; i++){
          totalX.push(data_10[i].time);
          console.log("\n",totalX);
      }

      totalX.sort(function(a, b){
        return a-b}
      );
       console.log("\n"+totalX);


      // console.log("\n");
      //
      // console.log("\n");
      // console.log(JSON.stringify(totalX));
      //
      // const ordered = {};
      // Object.keys(totalX).sort().forEach(function(key) {
      //   ordered[key] = totalX[key];
      // });
      // console.log("\n");
      // console.log(JSON.stringify(ordered));


  },1500);






});



//RUN SERVER
app.listen(3000,function(){
  console.log('\n Server Started on localhost:3000...\n');
});
