<template>
  <div class="container p-4 mx-auto">
    <h1>TODO</h1>
    <main>
      <div class="relative mt-3">
        <div
          class="grid gap-4"
          :class="{
            'grid-cols-12': state.todos.length !== 0,
            'grid-cols-6': state.todos.length === 0,
          }"
        >
          <div class="col-span-6 px-1 space-y-4">
            <div
              v-for="(todo, index) in state.todos"
              :key="index"
              class="flex items-center justify-between p-4 bg-white rounded shadow-lg"
              :class="{ 'bg-green-300': todo.done }"
            >
              <div>
                <div>{{ todo.name }}</div>
              </div>

              <div class="space-x-2">
                <button class="btn-error" @click="deleteTodo">
                  Delete
                </button>
                <button
                  class="btn-standard"
                  title="Complete TODO"
                  v-if="!todo.done"
                  @click="toggleDone(index)"
                >
                  Complete
                </button>

                <button
                  class="btn-standard"
                  title="Uncomplete TODO"
                  v-else
                  @click="toggleDone(index)"
                >
                  Uncomplete
                </button>
              </div>
            </div>
          </div>

          <div class="col-span-6">
            <div class="p-8 bg-white rounded shadow-lg">
              <h2 class="text-xl">Add TODO</h2>
              <input type="text" v-model="state.todoText" />
              <button class="block w-full btn-standard" @click="addTodo">
                Add
              </button>
              <p
                class="p-4 text-3xl text-red-500"
                v-if="state.errorMessage !== ''"
              >
                {{ state.errorMessage }}
              </p>
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
      errorMessage: '',
    });

    function addTodo() {
      if (state.todoText === '') {
        state.errorMessage = 'Text needs to be longer!';
      } else {
        state.errorMessage = '';
        state.todos.push({ name: state.todoText, done: false });
      }
    }

    function toggleDone(index) {
      state.todos[index].done = !state.todos[index].done;
    }

    function deleteTodo(index) {
      state.todos.splice(index, 1);
    }

    return {
      state,
      addTodo,
      toggleDone,
      deleteTodo,
    };
  },
});
</script>

<style lang="postcss" scoped>
button {
  @apply mt-4 px-4 py-2 font-bold text-white rounded;
}

.btn-standard {
  @apply bg-blue-500;
}
.btn-error {
  @apply bg-red-500;
}

.btn-standard:hover {
  @apply bg-blue-700;
}

.btn-error:hover {
  @apply bg-red-700;
}

input {
  @apply w-full p-2 mt-4 border rounded;
}
</style>
