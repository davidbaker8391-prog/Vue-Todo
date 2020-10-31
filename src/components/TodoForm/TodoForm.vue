<template>
  <div class="todoform">
    <h1>This text comes from TodoForm</h1>
    <h2>{{ testText }}</h2>
    <button
      type="button"
      class="button"
    >
      Button
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  methods: {
    test() {
      // return 'This is test value from method in TodoForm';
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
.button {
  @apply px-4 py-2 font-bold text-white bg-blue-500 rounded;
}

.button:hover {
  @apply bg-blue-700;
}
</style>
