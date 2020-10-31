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
