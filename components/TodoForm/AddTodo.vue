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
        <p
          v-if="errorMessage !== ''"
          class="error animated"
          :class="{ fadeInUp: errorMessage !== '' }"
        >
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import 'vue2-animate/dist/vue2-animate.min.css'

export default Vue.extend({
  data() {
    const todoText = ''
    const errorMessage = ''
    return { todoText, errorMessage }
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
        this.errorMessage = ''
        this.todoText = ''
      } else {
        this.errorMessage = 'Text needs to be longer!'
      }
    },
  },
})
</script>

<style lang="postcss" scoped>
.disabledButton {
  @apply opacity-50 cursor-not-allowed;
}
.error {
  @apply p-4 text-3xl text-red-500;
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
