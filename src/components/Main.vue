<template>
  <div class="container mx-auto">
    <h1>Main page</h1>
    <main>
      Click <router-link to="/todos" class="router-link">Todos</router-link> to
      get started
    </main>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="postcss" scoped>
main {
  @apply pt-4 pb-4 text-xl text-center;
}
</style>
