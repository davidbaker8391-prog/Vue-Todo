<template>
  <div class="container p-10 mx-auto">
    <h1>This text comes from TodoForm.vue</h1>
    <h2>{{ testText }}</h2>
    <button type="button" class="button">
      Button
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
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
};
</script>

<style lang="postcss" scoped>

h1 {
    @apply pt-4 pb-4 text-4xl font-bold text-center;
  }
  
button {
  @apply px-4 py-2 font-bold text-white bg-blue-500 rounded;
}

button:hover {
  @apply bg-blue-700;
}
</style>
