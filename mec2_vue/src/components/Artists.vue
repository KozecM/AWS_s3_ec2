<template>
  <div class="Artists">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{Name}}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <div v-for="(elm, album) in AllAlbums" v-bind:key="album">
            <Albums :Album = "album" :Songs = "elm"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Albums from './Albums'
export default {
  components:{
    Albums
  },
  props: ['Name',
          'AllAlbums']
}
</script>
<style scoped>

</style>