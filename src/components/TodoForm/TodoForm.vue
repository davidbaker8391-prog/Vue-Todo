<template>
  <div class="container p-4 mx-auto">
    <h1>This text comes from TodoForm.vue</h1>
    <main>
    <button type="button" class="button">
      Button
    </button>
    </main>
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
button {
  @apply px-4 py-2 font-bold text-white bg-blue-500 rounded;
}

button:hover {
  @apply bg-blue-700;
}
</style>
