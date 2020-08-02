const express = require('express');

const app = express();

app.get('/', function(req, res){
  res.send('Hi from Express 2');
});

const PORT = 3000;

app.listen(PORT, function(){
  console.log(`Express listening on port ${PORT}`);
});