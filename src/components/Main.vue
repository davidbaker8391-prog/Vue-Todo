<template>
  <div class="container mx-auto"><TodoForm /></div>
</template>

<script>
import TodoForm from './TodoForm/TodoForm.vue';

export default {
  name: 'Main',
  components: {
    TodoForm,
  },
};
</script>
