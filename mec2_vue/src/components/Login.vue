<template>
  <div class="main_page">
    <div class= "email_pass">
      <input type="email" id="email" v-model="email" placeholder="Email">
      <input type="password" id="password" v-model="password" placeholder="Password">
    </div>
    <br />
    <div class="buttons">
      <button id="signup" v-on:click="signUp">Sign Up</button>
      <button id="login" v-on:click="logIn">Log In</button>
      <button id="googleLogin" v-on:click="googleClick">Google Sign Up & Sign In</button>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import * as firebase from 'firebase';
// import router from '../routes'

export default {

  data() {
    return{
      email: "",
      password: ""
    };
  },

  methods: {

    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(data => {
        this.$router.push('home', data.user.uid);
      })
      .catch(function(error) {
          alert("error!" + error.message)
      });
    },

    googleClick:function () {
      var googleProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(
        googleProvider).then(data => {
          this.$router.push('home', data.user.uid);
        })
        .catch(function(error) {
          alert("error!" + error.message)
        });
    },

    logIn: function () {
      firebase.auth().signInWithEmailAndPassword(
        this.email,this.password)
        .then(data => {
          this.$router.push('home', data.user.uid);
        })
        .catch(function(error) {
          alert("error!" + error.message)
        });
    }
  }

}


/*eslint -enable*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main_page {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 2cm;
  border-radius: 25px;
  transform: translate(-50%, -50%);
  background-color: darkslategray;
  
}
input {
  margin: 5px;
  padding: 10px;
}

button {
  display: inline-block;
  border: 3px solid white;
  padding: 6px 19px;
  margin:0 5px 5px 0;
  border-radius: 2px;
  box-sizing: border-box;
  text-decoration: none;
  color:white;
  text-align: center;
  background-color: transparent;
  transition: all 0.3s;
}

button:hover{
  color: black;
  background-color: white;
}

#googleLogin {
  color:turquoise;
  border:3px solid turquoise;
}

#googleLogin:hover {
  color: black;
  background-color: turquoise;
}

@media all and (max-width: 480px){
  button{
    display: block;
    margin: 7px auto;
  }
}

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
