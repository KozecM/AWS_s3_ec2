<template>
  <div class="Song">
    <div v-for="(song) in songs" v-bind:key="song">
      {{song.name}}<br />
      <audio v-bind:src="song.Sort" type="audio/mpeg" controls></audio>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
export default {
  data () {
    return{
      songs: []
    }
  },

  mounted () {

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.uid = user.uid;
        axios
          .get('https://jaolxq4uuf.execute-api.us-east-1.amazonaws.com/dev/user/playlist',{
            params: {
              id: this.uid
            }
          })
          .then((res) => {
            console.log("res: ", res.data);
            this.songs = res.data;
            console.log(this.songs);
          });
      }
    })
  }
}
</script>
<style scoped>

</style>