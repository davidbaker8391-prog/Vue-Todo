<template>
  <div>
    <div class="p-8 bg-white rounded shadow-lg">
      <h2 class="text-xl">Add TODO</h2>
      <form @submit.prevent="addTodo">
        <input v-model="todoText" type="text" />
        <button
          class="submit-button"
          type="submit"
          :class="{ disabledButton: disableSubmit }"
          :disabled="disableSubmit"
        >
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import 'vue2-animate/dist/vue2-animate.min.css'

export default Vue.extend({
  name: 'AddTodo',
  data() {
    const todoText: String = ''
    return { todoText }
  },
  computed: {
    disableSubmit(): Boolean {
      return this.todoText === ''
    },
  },
  methods: {
    addTodo() {
      if (this.todoText.length > 0) {
        this.$store.commit('addTodo', this.todoText)
        this.todoText = ''
      }
    },
  },
})
</script>

<style lang="postcss" scoped>
.disabledButton {
  @apply opacity-50 cursor-not-allowed;
}

.btn-standard {
  @apply bg-blue-500;
}

.submit-button {
  @apply block w-64 mx-auto btn-standard;
}

input {
  @apply w-full p-2 mt-4 border rounded;
}
</style>
