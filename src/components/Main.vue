<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ testing }}</h2>
    <TodoForm />
  </div>
</template>

<script>
import TodoForm from './TodoForm/TodoForm.vue';

export default {
  name: 'Main',
  components: {
    TodoForm,
  },
  computed: {
    testing() {
      return 'This value is computed';
    },
  },
  props: {
    msg: String,
  },
};
</script>
