<template>
  <div>
    <Header />
    <Main v-bind="$attrs" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Layout/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style src="./assets/css/tailwind.css"></style>
