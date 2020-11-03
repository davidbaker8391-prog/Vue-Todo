<template>
  <div class="container p-4 mx-auto">
    <h1>Main page</h1>
    <main>
      Click <router-link to="/todos" class="router-link">Todos</router-link> to
      get started
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Main',
  title: 'Page title',
});
</script>
