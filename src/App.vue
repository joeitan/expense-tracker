<template>
  <v-app>
    <headers title="Expense Tracker"></headers>
    <expense-home></expense-home>
  </v-app>
</template>

<script>
import ExpenseHome from "./components/ExpenseHome.vue";
import Headers from "./headers/Headers.vue";
export default {
  components: {
    ExpenseHome,
    Headers,
  },
  // data() {
  //   return {
      
  //   };
  // },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
