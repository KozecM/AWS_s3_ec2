const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const AWS = require('aws-sdk');

const app = express();
const port = 3000;
app.use(cors());

app.get('/info', (req, res) => {
  
  res.send("THis IS nothing get outahere");
});
app.listen(port, () => console.log('Hello from port {{port}}'))