<template>
  <div class="Song">
    <p> {{Song}} </p>
    <audio v-bind:src="url" type="audio/mpeg" @play="test()" controls></audio>
    <div v-if="onplay === false">
      <button id="playlist" v-on:click="addSong(url)">Add To Playlist</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
export default {
  props: [ 
    'Song',
    'Album',
    'Artist'
  ],
  data () {
    return{
      url: "",
      onplay: false
    }
  },

  methods: {
    addSong(url){
      this.onplay = true;
      var currentid = firebase.auth().currentUser;
      axios.post('https://jaolxq4uuf.execute-api.us-east-1.amazonaws.com/dev/user/playlist',null, {
        params: {
          id: currentid.uid,
          song: url,
          name: this.Song
        }  
      }).then((res)=> {
        console.log(res);
      })
    },
    test() {
      axios
        .post('https://jaolxq4uuf.execute-api.us-east-1.amazonaws.com/dev/play', null, {
          params: {
            song: this.Song,
            album: this.Album,
            artist: this.Artist
          }
        }).then((res) => {
          console.log(res.data);
        })
    }
  },

  mounted () {
    axios 
      .get('http://ec2-184-72-108-117.compute-1.amazonaws.com:3000/url/for/song',{
        params: {
          song: this.Song
        }
      })
      .then((res) => {
        //console.log("res: ", res.data);
        this.url = res.data[0];
        console.log(this.url);
      });
  }
}
</script>
<style scoped>

</style>