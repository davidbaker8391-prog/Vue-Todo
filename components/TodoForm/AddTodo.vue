<template>
  <div>
    <div class="p-8 bg-white rounded shadow-lg">
      <h2 class="text-xl">Add TODO</h2>
      <form @submit.prevent="addTodo">
        <input v-model="todoText" type="text" />
        <button class="block w-full btn-standard" type="submit">Add</button>
        <p v-if="errorMessage !== ''" class="p-4 text-3xl text-red-500">
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    const todoText = ''
    const errorMessage = ''
    return { todoText, errorMessage }
  },
  methods: {
    addTodo() {
      if (this.todoText.length > 0) {
        this.errorMessage = ''
        this.todoText = ''
        this.$store.commit('addTodo', this.todoText)
      } else {
        this.errorMessage = 'Text needs to be longer!'
      }
    },
  },
})
</script>

<style lang="postcss" scoped>
input {
  @apply w-full p-2 mt-4 border rounded;
}
</style>
