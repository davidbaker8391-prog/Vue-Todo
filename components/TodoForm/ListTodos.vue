<template>
  <div>
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
        <button class="btn-error" @click="deleteTodo(index)">Delete</button>

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
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    todos: { type: Array, default: null },
    name: { type: String, default: '' },
    done: { type: Boolean, default: false },
  },
  methods: {
    deleteTodo(index: number) {
      this.$store.commit('deleteTodo', index)
    },
    toggleDone(index: number) {
      this.$store.commit('toggleDone', index)
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
