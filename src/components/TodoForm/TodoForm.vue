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
              <transition appear name="fade">
                <div>
                  <div>{{ todo.name }}</div>
                </div>
              </transition>

              <transition appear name="fade">
                <div class="space-x-2">
                  <button v-show="!todo.done" @click="toggleDone(index)">
                    Complete
                  </button>

                  <button v-show="todo.done" @click="toggleDone(index)">
                    Uncomplete
                  </button>
                </div>
              </transition>
            </div>
          </div>

          <div class="col-span-6">
            <div class="p-8 bg-white rounded shadow-lg">
              <h2 class="text-xl">Add TODO</h2>
              <input type="text" v-model="state.todoText" />
              <button @click="addTodo">Add</button>
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
      state.todos.push({ name: state.todoText, done: false });
    };

    const toggleDone = (index) => {
      state.todos[index].done = !state.todos[index].done;
    };

    return {
      state,
      addTodo,
      toggleDone,
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

input {
  @apply w-full p-2 mt-4 border rounded;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
