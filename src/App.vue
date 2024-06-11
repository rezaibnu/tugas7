<template>
    <div id="app">
      <TodoList />
    </div>
  </template>
  
  <script>
  import TodoList from './components/TodoList.vue';
  
  export default {
    name: 'App',
    components: {
      TodoList
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background: linear-gradient(to right, #ff7e5f, #feb47b); /* Contoh gradien warna */
    min-height: 100vh; /* Pastikan background menutupi seluruh layar */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  