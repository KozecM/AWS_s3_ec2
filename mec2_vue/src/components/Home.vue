<template>
  <div class="home">
    <div class="wrapper">
      <div class="columns">
        <div class="column">
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
export default {
  components:{
    Genre
  },
  data () { 
    return {
      email: "",
      uid: "",
      name: "",
      genres: []
    }
  },
  mounted () {
    axios
      .get('http://ec2-34-227-26-148.compute-1.amazonaws.com:3000/genres')
      .then((res) => {
        console.log("res: ", res.data);
        this.genres = res.data;
      });
    
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.uid = user.uid;
        this.email = user.email;
        this.name = user.displayName;
        axios
          .post('http://ec2-34-227-26-148.compute-1.amazonaws.com:3000/save-user', {
            params: {
              id: this.uid,
              name: this.name,
              email: this.email,
            }
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
