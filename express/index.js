const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const AWS = require('aws-sdk');

const app = express();
const port = 3000;
const bucketName = "maxxk-electron-app";
app.use(cors());

var s3 = new AWS.S3({
  region: "us-east-1",
  apiVersion: "2006-03-01",
  params: { Bucket: bucketName }
});

var alldata = {};

let params = {
  Bucket: bucketName
};

app.get('/info', (req, res) => {
  s3.listObjectsV2(params, function (err, data) {
    if(err){
      console.log(err);
    }
    else{
      data.Contents.forEach((i) => {
        if(i.Size != 0){
          var href = this.request.httpRequest.endpoint.href;
          var bucketUrl = href + bucketName + "/";
          var songKey = i.Key;
          var songUrl = bucketUrl + encodeURIComponent(songKey);
          var val = i.Key.split("/")
          assign(alldata, val, songUrl);
        }
      });
      console.log(alldata);
      res.send(alldata);
    }

  })
  
});
app.listen(port, () => console.log(`Hello from port ${port}`))

function assign(obj, keyPath, value) {
  lastKeyIndex = keyPath.length-1;
  for (var i = 0; i < lastKeyIndex; ++ i) {
    key = keyPath[i];
    if (!(key in obj)){
      obj[key] = {}
    }
    obj = obj[key];
  }
  obj[keyPath[lastKeyIndex]] = value;
}