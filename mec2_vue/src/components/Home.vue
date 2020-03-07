<template>
  <div class="home">
    <div class="wrapper">
      <div class="columns">
        <div class="column">
          <button v-on:click="toggle = !toggle">Playlist</button>
          <div v-show= 'toggle'>
            <Playlist/>
          </div>
          <div v-for="(genre) in genres" v-bind:key="genre">
            <Genre :Genre= "genre"/> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
import Genre from './Genre'
import Playlist from './Playlist'
export default {
  components:{
    Playlist,
    Genre
  },
  data () { 
    return {
      email: "",
      uid: "",
      name: "",
      genres: [],
      toggle: false
    }
  },
  mounted () {
    axios
      .get('http://ec2-184-72-108-117.compute-1.amazonaws.com:3000/genres')
      .then((res) => {
        console.log("res: ", res.data);
        this.genres = res.data;
      });
    
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.uid = user.uid;
        this.email = user.email;
        this.name = user.displayName;
        console.log("id: " + this.uid + "\nemail: " + this.email + "\nname: " + this.name);
        axios
          .post('https://jaolxq4uuf.execute-api.us-east-1.amazonaws.com/dev/save-user', null,  {
            params: {
              id: this.uid,
              name: this.name,
              email: this.email,
            }
          }).then((res) => {
            console.log("post res:", res.data);
          })
      }else{
        this.$router.push('/');
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
