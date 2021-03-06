var express = require('express')
var app = express()
let fetch = require('node-fetch');
const port=process.env.PORT
//GET: /ip_api?address=""
app.get('/ip_api', function (req, res) {

  let addr = req.query.address;
  const url = "http://ip-api.com/json/";
  console.log("Addr", addr)
  fetch(url+addr)
        .then(r => {
            //console.log("Blaise");
            return r.json();
        })
        .then(json => {
            //console.log(json);
            if(json.status=="fail"){
              res.status(404)
            }
            res.send(json);
        });

  
})

app.listen(port,()=>{
  console.log("Serving running on Port ", port);
})