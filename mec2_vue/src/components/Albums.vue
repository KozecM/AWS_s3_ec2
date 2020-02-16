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
          <div v-for="(elm, song) in Songs" v-bind:key="song">
            {{song}}
            <br />
            <audio controls>
              <source v-bind:src="elm" type="audio/mpeg"/>
            </audio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['Album',
          'Songs']
}
</script>
<style scoped>

</style>