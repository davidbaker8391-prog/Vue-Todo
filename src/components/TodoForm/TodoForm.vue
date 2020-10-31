<template>
  <div class="container p-4 mx-auto">
    <h1>This text comes from TodoForm.vue</h1>
    <main>
      <div class="mt-3">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-6 px-1 space-y-4 overflow-y-auto">
            Content
          </div>
        </div>
      </div>
      <button type="button" class="button">
        Button
      </button>
    </main>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      todos: [],
      todoText: '',
    });

    return {
      state,
    };
  },
});
</script>

<style lang="postcss" scoped>
button {
  @apply px-4 py-2 font-bold text-white bg-blue-500 rounded;
}

button:hover {
  @apply bg-blue-700;
}
</style>
