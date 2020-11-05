<template>
  <div class="container p-4 mx-auto">
    <h1>TODO</h1>
    <main>
      <div class="relative mt-3">
        <div class="grid grid-cols-6 gap-4">
          <div class="col-span-6 px-1 space-y-4">
            <list-todos :todos="todos"></list-todos>
          </div>
          <div class="col-span-6">
            <add-todo></add-todo>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import '@/components/TodoForm/ListTodos'
import '@/components/TodoForm/AddTodo'

export default Vue.extend({
  computed: {
    todos() {
      return this.$store.state.todos
    },
  },
  methods: {
    toggleDone(index: number) {
      this.$store.commit('toggleDone', index)
    },
    deleteTodo(index: number) {
      this.$store.commit('deleteTodo', index)
    },
  },
})
</script>
