<template>
  <div class="Song">
    <p> {{Song}} </p>
    <audio v-bind:src="url" type="audio/mpeg" controls></audio>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['Song'],
  data () {
    return{
      url: ""
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