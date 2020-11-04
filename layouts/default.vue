<template>
  <div>
    <nav class="text-white bg-gray-800">
      <header>
        <div class="container mx-auto">
          <div class="flex items-center">
            <router-link to="/" class="router-link">Home</router-link>
            <router-link to="/todos" class="router-link">Todos</router-link>
          </div>
        </div>
      </header>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
// import defineComponent from 'vue'
import Vue, { PropOptions } from 'vue'

// export default new defineComponent({
export default Vue.extend({
  name: 'Header',
  watch: {
    $route(to) {
      document.title = to.meta.title || 'Your Website'
    },
  },
})
</script>

<style lang="postcss">
.router-link {
  @apply inline-block px-16 py-4 transition-colors duration-500 cursor-pointer;
}

.router-link:hover {
  @apply bg-gray-500;
}


/*
Common styles for all components (not scoped)
*/
h1 {
  @apply pt-4 pb-4 text-4xl font-bold text-center;
}
main {
  @apply text-lg text-center;
}

</style>
