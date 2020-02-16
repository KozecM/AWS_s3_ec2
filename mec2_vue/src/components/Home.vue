<template>
  <div class="home">
    <div class="wrapper">
      <div class="columns">
        <div class="column">
          <div v-for="(elm, artist) in alldata" v-bind:key="artist">
            <Artists :Name= "artist" :AllAlbums = "elm"/> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Artists from './Artists'
export default {
  components:{
    Artists
  },
  data () {
    return {
      alldata: {}
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/info')
      .then((res) => {
        console.log("res: ", res.data);
        this.alldata = res.data;
      });
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
