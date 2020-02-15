const AWS = require('aws-sdk');
const prompt = require('electron-prompt');

var albumBucketName = process.env.BUCKET_NAME;
var bucketRegion = process.env.REIGON;

var s3 = new AWS.S3({
  region: bucketRegion,
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName }
});

var sts = new AWS.STS();
AWS.config.getCredentials(function(err) {
  if (err) console.log("credentials not loaded", err.stack);
  // credentials not loaded
  else {
    console.log("Credentails loaded!");
    }
});
var params = {
  RoleArn: "arn:aws:iam::383829852699:role/bucketRole", /* required */
  RoleSessionName: "AccessMusicBucketSession", /* required */
};
sts.assumeRole(params, function(err, data) {
  if (err) console.log("Error!: ", err, err.stack); // an error occurred
  else     console.log("success!: ", data);           // successful response
});
// console.log(AWS.config.credentials);
//credentials = AWS.config.credentials; //credentials = AWS.config.credentials;


function listArtists() {
  s3.listObjects({ Delimiter: "/" }, function(err, data) {
    if (err) {
      return alert("There was an error listing your artists: " + err.message +" " + data);
    } else {
      var albums = data.CommonPrefixes.map(function(commonPrefix) {
        var prefix = commonPrefix.Prefix;
        var artistName = decodeURIComponent(prefix.replace("/", ""));
        return getHtml([
          "<li>",
          "<button onclick=\"deleteArtist('" + artistName + "')\">X</button>",
          "<button onclick=\"listAlbums('" + artistName + "')\">",
          artistName,
          "</span>",
          "</li>"
        ]);
      });
      var message = albums.length
        ? getHtml([
            "<p>Click on an album name to view it.</p>",
            "<p>Click on the X to delete the artist.</p>"
          ])
        : "<p>You do not have any artists. Please Create artist.";
      var htmlTemplate = [
        "<h2>Artists</h2>",
        message,
        "<ul>",
        getHtml(albums),
        "</ul>",
        "<button onclick=\"artistPrompt()\">",
        "Create New Artist",
        "</button>",
      ];
      document.getElementById("app").innerHTML = getHtml(htmlTemplate);
    }
  });
}

function listAlbums(artistName) {
  var artistAlbumsKey = encodeURIComponent(artistName) + "/";
  s3.listObjects({ Prefix: artistAlbumsKey, Delimiter: "/"}, function(err, data) {
    if (err) {
      return alert("There was an error listing your albums: " + err.message +" " + data);
    } else {
      var albums = data.CommonPrefixes.map(function(commonPrefix) {
        var prefix = commonPrefix.Prefix;
        var albumName = decodeURIComponent(prefix.replace(artistName + "/", ""));
        albumName = albumName.replace("/", "")
        console.log(albumName);
        return getHtml([
          "<li>",
          "<span onclick=\"deleteAlbum('" + albumName + "')\">X</span>",
          "<span onclick=\"viewAlbum('"+ albumName + "','"+ artistName +"')\">",
          albumName,
          "</span>",
          "</li>"
        ]);
      });
      var message = albums.length
        ? getHtml([
            "<p>Click on an album name to view it.</p>",
            "<p>Click on the X to delete the album.</p>"
          ])
        : "<p>You do not have any albums. Please Create album.";
      var htmlTemplate = [
        "<h2>Albums of",
        artistName,
        "</h2>",
        message,
        "<ul>",
        getHtml(albums),
        "</ul>",
        "<button onclick=\"albumPrompt('" + artistName + "')\">",
        "Create New Album",
        "</button>",
        "<button onclick=\"listArtists()\">",
        "Back to Artists",
        "</button>",
      ];
      document.getElementById("app").innerHTML = getHtml(htmlTemplate);
    }
  });
}

function albumPrompt(artistName){
  prompt({
    title: 'Add Album',
    label: 'Album Name',
    value: 'Album',
    type: 'input'
  })
  .then((r) => {
    if(r === null) {
        console.log('user cancelled');
    } else {
      createAlbum(r, artistName);
        console.log('result: ' + r + "\nartist: " + artistName);
    }
  })
  .catch(console.error);
}
function artistPrompt(){
  prompt({
    title: 'Add Artist',
    label: 'Artist Name',
    value: 'Artist',
    type: 'input'
  })
  .then((r) => {
    if(r === null) {
        console.log('user cancelled');
    } else {
      createArtist(r);
        console.log('result', r);
    }
  })
  .catch(console.error);
}


function createAlbum(albumName, artistName) {
  albumName = albumName.trim();
  artistName = artistName.trim();
  if (!albumName) {
    return alert("Album names must contain at least one non-space character.");
  }
  if (albumName.indexOf("/") !== -1) {
    return alert("Album names cannot contain slashes.");
  }
  var albumKey = encodeURIComponent(artistName) + "/" + encodeURIComponent(albumName) + "/";
  console.log("album Key: " + albumKey);
  s3.headObject({ Key: albumKey }, function(err, data) {
    if (!err) {
      return alert("Album already exists.");
    }
    if (err.code !== "NotFound") {
      return alert("There was an error creating your album: " + err.message);
    }
    s3.putObject({ Key: albumKey }, function(err, data) {
      if (err) {
        return alert("There was an error creating your album: " + err.message);
      }
      alert("Successfully created album.");
      viewAlbum(albumName, artistName);
    });
  });
}

function createArtist(artistName) {
  artistName = artistName.trim();
  if (!artistName) {
    return alert("Album names must contain at least one non-space character.");
  }
  if (artistName.indexOf("/") !== -1) {
    return alert("Album names cannot contain slashes.");
  }
  var artistKey = encodeURIComponent(artistName) + "/";
  s3.headObject({ Key: artistKey }, function(err, data) {
    if (!err) {
      return alert("Album already exists.");
    }
    if (err.code !== "NotFound") {
      return alert("There was an error creating your artist: " + err.message);
    }
    s3.putObject({ Key: artistKey }, function(err, data) {
      if (err) {
        return alert("There was an error creating your artist: " + err.message);
      }
      alert("Successfully created artist.");
      listAlbums(artistName);
    });
  });
}

function viewAlbum(albumName, artistName) {
  var albumSongsKey = encodeURIComponent(artistName) + "/" +encodeURIComponent(albumName) + "/";
  console.log("album song key:", albumSongsKey);
  s3.listObjects({ Prefix: albumSongsKey, Delimiter: "/" }, function(err, data) {
    if (err) {
      return alert("There was an error viewing your album: " + err.message);
    }
    // 'this' references the AWS.Response instance that represents the response
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + albumBucketName + "/";

    var songs = data.Contents.map(function(song) {
      var songKey = song.Key;
      var songUrl = bucketUrl + encodeURIComponent(songKey);
      return getHtml([
        "<span>",
        "<div>",
        '<audio controls>',
        '<source src="' + songUrl + '" type="audio/mpeg"/>',
        "</audio>",
        "</div>",
        "<div>",
        "<span onclick=\"deleteSong('" +
          artistName +
          "','" +
          albumName +
          "','" +
          songKey +
          "')\">",
        "X",
        "</span>",
        "<span>",
        songKey.replace(albumSongsKey, ""),
        "</span>",
        "<button onclick=\"renameSongPrompt('" + 
          artistName + "','" +
          albumName + "','" +
          albumSongsKey + "','" +
          songKey + "')\">",
        "Rename Song",
        "</button>",
        "</div>",
        "</span>"
      ]);
    });
    var message = songs.length
      ? "<p>Click on the X to delete the song</p>"
      : "<p>You do not have any songs in this album. Please add songs.</p>";
    var htmlTemplate = [
      "<h2>",
      "Artist: " + artistName,
      "</h2>",
      "<h2>",
      "Album: " + albumName,
      "</h2>",
      message,
      "<div>",
      getHtml(songs),
      "</div>",
      '<input id="songupload" type="file">',
      "<button id=\"addsong\" onclick=\"addSong('" + albumName+ "','" + artistName + "')\">",
      "Add Song",
      "</button>",
      "<button onclick=\"listAlbums('" + artistName + "')\">",
      "Back To Albums",
      "</button>"
    ];
    document.getElementById("app").innerHTML = getHtml(htmlTemplate);
  });
}

function renameSongPrompt(artist, album, albumSongsKey, songKey){
  prompt({
    title: 'Rename Song',
    label: 'New Song Name',
    value: 'Song',
    type: 'input'
  })
  .then((r) => {
    if(r === null) {
        console.log('user cancelled');
    } else {
      renameSong(r, albumSongsKey, songKey, artist, album);
        console.log('song: ' + r );
    }
  })
  .catch(console.error);
}

function renameSong(newName, albumSongsKey, songKey, artist, album){
  var newKey = albumSongsKey + newName + ".mp3";

  console.log(newKey);
  var params = {
    Bucket: albumBucketName,
    CopySource: albumBucketName + "/" + songKey,
    Key: newKey
  } 
  console.log("Good!"); 
  s3.copyObject(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else{
      console.log("data:", data);           // successful response
      deleteSong(artist, album, songKey);
    }    
  });
}

function addSong(albumName, artistName) {
  var files = document.getElementById("songupload").files;
  if (!files.length) {
    return alert("Please choose a file to upload first.");
  }

  console.log("album: " + albumName + "\n artist: " + artistName);
  var file = files[0];
  var fileName = file.name;
  var albumSongsKey = encodeURIComponent(artistName) + "/" + encodeURIComponent(albumName) + "/";


  var songKey = albumSongsKey + fileName;

  console.log("album Key: " + albumSongsKey);

  var fs = require('fs');
  var fileStream = fs.createReadStream(file.path);
  fileStream.on('error', function(err) {
    console.log('File Error', err);
  });

  console.log(file.path);
  var uploadParams = {Bucket: albumBucketName, Key: '', Body: ''};
  uploadParams.Body = fileStream;
  uploadParams.Key = songKey

  console.log(uploadParams);

  s3.upload(uploadParams, function (err, data) {
    if (err) {
      console.log("Error", err);
    } if (data) {
      console.log("Upload Success", data.Location);
      alert("Successfully uploaded song.");
      viewAlbum(albumName, artistName);
    }
  });

}

function deleteSong(artistName, albumName, songKey) {
  s3.deleteObject({ Key: songKey }, function(err, data) {
    if (err) {
      return alert("There was an error deleting your song: ", err.message);
    }
    alert("Successfully deleted song.");
    viewAlbum(albumName, artistName);
  });
}
function deleteAlbum(albumName) {
  var albumKey = encodeURIComponent(albumName) + "/";
  s3.listObjects({ Prefix: albumKey }, function(err, data) {
    if (err) {
      return alert("There was an error deleting your album: ", err.message);
    }
    var objects = data.Contents.map(function(object) {
      return { Key: object.Key };
    });
    s3.deleteObjects(
      {
        Delete: { Objects: objects, Quiet: true }
      },
      function(err, data) {
        if (err) {
          return alert("There was an error deleting your album: ", err.message);
        }
        alert("Successfully deleted album.");
        listAlbums();
      }
    );
  });
}

function deleteArtist(artistName) {
  var artistKey = encodeURIComponent(artistName) + "/";
  s3.listObjects({ Prefix: artistKey }, function(err, data) {
    if (err) {
      return alert("There was an error deleting your artist: ", err.message);
    }
    var objects = data.Contents.map(function(object) {
      return { Key: object.Key };
    });
    s3.deleteObjects(
      {
        Delete: { Objects: objects, Quiet: true }
      },
      function(err, data) {
        if (err) {
          return alert("There was an error deleting your artist: ", err.message);
        }
        alert("Successfully deleted artist");
        listArtists();
      }
    );
  });
}