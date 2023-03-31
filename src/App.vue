<template>
  <Header></Header>
  <div id="quiz">
    <Quiz></Quiz>
  </div>
</template>

<script>
import Quiz from "./components/Quiz.vue";
import Header from "./components/Header.vue";

export default {
  name: 'App',
  components: {
    Quiz,
    Header
  }
}
</script>

<style>
:root {
  background-color: #252525;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  transition: ease-in-out .2s;
}

#quiz {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

a:hover {
  color: #ffff88;
}
</style>
