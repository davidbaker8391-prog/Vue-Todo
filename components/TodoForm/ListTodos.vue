<template>
  <div>
    <transition-group name="list-complete" mode="out-in" tag="div">
      <div
        v-for="(todo, index) in todos"
        :key="todo.id"
        class="flex items-center justify-between p-4 mt-4 bg-white rounded shadow-lg list-complete-item"
        :class="{ 'bg-green-300': todo.done }"
      >
        <span>{{ todo.name }}</span>

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
    </transition-group>
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

<style scoped>
.list-complete-item {
  transition: all 0.5s;
  display: inline-block;
  width: 100%;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
