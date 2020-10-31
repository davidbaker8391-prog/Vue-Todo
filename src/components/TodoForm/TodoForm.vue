<template>
  <div class="container p-4 mx-auto">
    <h1>TODO</h1>
    <main>
      <div class="mt-3">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-6 px-1 space-y-4 overflow-y-auto">
            <div
              v-for="(todo, index) in state.todos"
              :key="index"
              class="flex items-center justify-between p-8 bg-white rounded shadow-md"
              :class="{ 'bg-green-200': todo.done }"
            >
              <div>
                <div>{{ todo.name }}</div>
              </div>
            </div>
          </div>

          <div class="col-span-6">
            <div class="p-8 bg-white rounded shadow-lg">
              <h2 class="text-xl">Add TODO</h2>
              <input type="text" class="w-full p-2 mt-4 border rounded" />
              <button @click="addTodo">Test</button>
            </div>
          </div>
        </div>
      </div>
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

    const addTodo = () => {
      state.todos.push({ name: 'Test', done: false });
    };

    return {
      state,
      addTodo,
    };
  },
});
</script>

<style lang="postcss" scoped>
button {
  @apply mt-4 px-4 py-2 font-bold text-white bg-blue-500 rounded;
}

button:hover {
  @apply bg-blue-700;
}
</style>
