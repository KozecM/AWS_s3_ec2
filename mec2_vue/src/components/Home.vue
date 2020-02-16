<template>
  <div class="hello">
    <h3>Hello Bitch</h3>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {

  },
  mounted () {
    axios
      .get('http://54.167.99.88:3000/info')
      .then(res => (console.log(res)));
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
