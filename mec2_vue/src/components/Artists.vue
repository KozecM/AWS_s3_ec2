<template>
  <div class="Artists">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{Artist}}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div v-for="(album) in albums" v-bind:key="album">
            <Albums :Album = "album"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Albums from './Albums'
export default {
  components:{
    Albums
  },
  props: ['Artist'],
  data () {
    return{
      albums: []
    }
  },

  mounted () {
    axios
      .get('http://ec2-34-227-26-148.compute-1.amazonaws.com:3000/albums/for/artist',{
        params: {
          artist: this.Artist
        }
      })
      .then((res) => {
        console.log("res: ", res.data);
        this.albums = res.data;
      });
  }
}
</script>
<style scoped>

</style>