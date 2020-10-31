<template>
  <div>
    <Header />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style src="./assets/css/tailwind.css"></style>

<style lang="postcss">

/*
Common styles for all components (not scoped)
*/

h1 {
  @apply pt-4 pb-4 text-4xl font-bold text-center;
}

main {
  @apply text-lg text-center;
}
</style>
