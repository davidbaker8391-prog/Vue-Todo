<template>
  <div class="container mx-auto">
    <h1 class="title">TODOs page</h1>
    <h2>{{ message }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return { message: 'Dette er en test' }
  },
})
</script>

<style lang="postcss"></style>
