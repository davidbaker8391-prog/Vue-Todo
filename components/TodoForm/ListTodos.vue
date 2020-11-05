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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: { type: Array, default: null },
    name: { type: String, default: '' },
    done: { type: Boolean, default: false },
  },
}
</script>

<style></style>
