<script setup>

</script>

<template>
  <div>
    <h1>Dynamic Route Component</h1>
    <p>This is the component for ID: {{ $route.params.id }}</p>
    <!-- Add your component content here -->
  </div>
</template>

<script>
  export default {
    props: {
    },
    computed: {
    },
  };
</script>

<style scoped>

</style>
