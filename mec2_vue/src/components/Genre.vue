<template>
  <div class="Genre">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{this.Genre}}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div v-for="(artist) in artists" v-bind:key="artist">
            <Artists :Artist = "artist"/>
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
  props: ['Genre'],
  data () {
    return{
      artists: []
    }
   
  },

  mounted () {
    axios
      .get('http://ec2-184-72-108-117.compute-1.amazonaws.com:3000/artists/for/genre',{
        params: {
          genre: this.Genre
        }
      })
      .then((res) => {
        //console.log("res: ", res.data);
        this.artists = res.data;
      });
  }
}
</script>
<style scoped>

</style>