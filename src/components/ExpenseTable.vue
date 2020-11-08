<template>
  <ul>
    <expense-list 
      v-for="ex in expenses" 
      :key="ex.id"
      :title="ex.title"
      :description="ex.description"
    ></expense-list>
  </ul>
</template>

<script>
import ExpenseList from './ExpenseList.vue';

export default {
     components:{
         ExpenseList
     },
     props: ['expenses']
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>