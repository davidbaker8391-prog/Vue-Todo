<template>
  <div class="container p-4 mx-auto">
    <h1>TODO</h1>
    <main>
      <div class="relative mt-3">
        <div class="grid grid-cols-6 gap-4">
          <div class="col-span-6 px-1 space-y-4">
            <list-todos :todos="todos" />
          </div>
          <div class="col-span-6">
            <add-todo />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: 'Vue TODO - Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Vue TODO application with Nuxt and Typescript',
        },
      ],
    }
  },
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
