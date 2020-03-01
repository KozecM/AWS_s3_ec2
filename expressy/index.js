const express = require('express');
const AWS = require('aws-sdk');

const app = express();
const port = 3000;
const bucketName = "maxxk-electron-app";

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

AWS.config.update({
  region: "us-east-1",
});

var docClient = new AWS.DynamoDB.DocumentClient();

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

app.get('/genres', (req, res) => {
  var genres = [];

  var params = {
    TableName: "music",
    FilterExpression: "PrimaryKey = :genre",
    ExpressionAttributeValues: { ":genre": "Genres", }
  };

  docClient.scan(params, function (err, data) {
    if (err) console.log(err);
    else{
      data.Items.forEach((i) => {
        genres.push(i.SortKey);
      });
      // console.log(genres);
      res.send(genres);
    } 
  });
});

app.get('/artists/for/genre', async (req, res) => {
  var genre = req.query.genre;
  var result = await query(genre);
  // console.log(result)
  res.send(result);
});

app.get('/albums/for/artist', async (req, res) => {
  var artist = req.query.artist;
  var result = await query(artist);
  res.send(result);
});

app.get('/songs/for/album', async (req, res) => {
  var album = req.query.album;
  var result = await query(album);
  res.send(result);
});

app.get('/url/for/song', async (req, res) => {
  var song = req.query.song;
  var result = await query(song);
  res.send(result);
});

app.get('/put/item', (req, res) => {
  var pk = req.query.pk;
  var sk = req.query.sk;

  console.log("pk: ", pk);
  var params = {
    TableName: "music",
    Item: {
      PrimaryKey: pk,
      SortKey: sk
    }
  }

  docClient.put(params, function(err, data) {
    if (err) console.log(err);
    else{
      // console.log(data);
      res.send(data);
    } 
  });
})

app.post('/save-user', (req, res) => {
  var id = req.query.id;
  var name = req.query.name;
  var email = req.query.email;

  var params = {
    TableName: "users",
    Item: {
      ID: id,
      name: name,
      email: email
    },
  }

  console.log(params);
  
  docClient.put(params, function(err, data) {
    if (err) res.send(err);
    else{
      console.log(data);
      res.send(201);
    } 
  });
})

function query(filter) {
  return new Promise ( result => {
    var res = []
    var params = {
      TableName: "music",
      KeyConditionExpression: "PrimaryKey = :v1",
      ExpressionAttributeValues: { ":v1": filter}
    };

    docClient.query(params, function (err, data) {
      if (err) console.log(err);
      else{
        data.Items.forEach((i) => {
          res.push(i.SortKey);
        });
        // console.log("result: ", res);
        result(res);
      } 
    })
  });
}

function scan(filter) {
  var result = [];
  var params = {
    TableName: "music",
    FilterExpression: "PrimaryKey = :filter",
    ExpressionAttributeValues: { ":filter": filter }
  };

  docClient.scan(params, function (err, data) {
    if (err) console.log(err);
    else{
      data.Items.forEach((i) => {
        result.push(i.SortKey);
      });
      // console.log("result: ", result);
      return result;
    } 
  });
}

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