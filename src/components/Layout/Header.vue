<template>
  <div>
    <nav class="text-white bg-gray-800">
      <div class="container mx-auto">
        <div class="flex items-center">
          <router-link to="/" class="router-link">Home</router-link>
          <router-link to="/todos" class="router-link">Todos</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  methods: {
    test() {
      this.testText = 'Endret tekst fra test';
    },
  },
  data() {
    return {
      testText: 'Teeest',
    };
  },
});
</script>

<style lang="postcss" scoped>
.router-link {
  @apply inline-block px-16 py-4 transition-colors duration-500 cursor-pointer;
}

.router-link:hover {
  @apply bg-gray-500;
}
</style>
