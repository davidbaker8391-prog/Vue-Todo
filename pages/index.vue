<template>
  <div class="container p-4 mx-auto">
    <h1>TODO</h1>
    <main>
      <div class="relative mt-3">
        <div class="grid grid-cols-6 gap-4">
          <div class="col-span-6 px-1 space-y-4">
            <list-todos :todos="todos"></list-todos>

            <div
              v-for="(todo, index) in todos"
              :key="index"
              class="flex items-center justify-between p-4 bg-white rounded shadow-lg"
              :class="{ 'bg-green-300': todo.done }"
            >
              <div>
                <div>{{ todo.name }}</div>
              </div>

              <div class="space-x-2">
                <button class="btn-error" @click="deleteTodo(index)">
                  Delete
                </button>

                <button
                  v-if="!todo.done"
                  class="btn-standard"
                  title="Complete TODO"
                  @click="toggleDone(index)"
                >
                  Complete
                </button>

                <button
                  v-else
                  class="btn-standard"
                  title="Uncomplete TODO"
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
              <form @submit.prevent="addTodo">
                <input v-model="todoText" type="text" />
                <button class="block w-full btn-standard" type="submit">
                  Add
                </button>
                <p v-if="errorMessage !== ''" class="p-4 text-3xl text-red-500">
                  {{ errorMessage }}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import '@/components/TodoForm/ListTodos'

export default Vue.extend({
  data() {
    const todoText = ''
    const errorMessage = ''
    return { todoText, errorMessage }
  },
  computed: {
    todos() {
      return this.$store.state.todos
    },
  },
  methods: {
    addTodo() {
      if (this.todoText.length > 0) {
        this.errorMessage = ''
        this.$store.commit('addTodo', this.todoText)
      } else {
        this.errorMessage = 'Text needs to be longer!'
      }
    },
    toggleDone(index: number) {
      this.$store.commit('toggleDone', index)
    },
    deleteTodo(index: number) {
      this.$store.commit('deleteTodo', index)
    },
  },
})
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
