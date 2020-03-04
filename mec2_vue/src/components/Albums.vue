<template>
  <div class="Albums">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{Album}}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <div v-for="(song) in songs" v-bind:key="song">
            <Song :Song = "song" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Song from './Song'
export default {
  components:{
    Song
  },
  props: ['Album'],
  data () {
    return{
      songs: []
    }
  },

  mounted () {
    axios
      .get('http://ec2-184-72-108-117.compute-1.amazonaws.com:3000/songs/for/album',{
        params: {
          album: this.Album
        }
      })
      .then((res) => {
        //console.log("res: ", res.data);
        this.songs = res.data;
      });
  }
}
</script>
<style scoped>

</style>