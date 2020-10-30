/* eslint-disable max-len */
<template>
  <div>
    <nav class="text-white bg-gray-800">
      <div class="container mx-auto">
        <div class="flex items-center">
          <router-link
            to="/"
            class="inline-block px-16 py-4 transition-colors duration-500 cursor-pointer hover:bg-gray-500"
            >Home</router-link
          >
          <router-link
            to="/todos"
            class="inline-block px-16 py-4 transition-colors duration-500 cursor-pointer hover:bg-gray-500"
            >Todos</router-link
          >
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    test() {
      // return 'This is test value from method in TodoForm';
      this.testText = 'Endret tekst fra test';
    },
  },
  data() {
    return {
      testText: 'Teeest',
    };
  },
};
</script>
