<template>
  <base-card>
    <bar-graph v-bind:expenses="expenseDataForGraph" />
    <v-data-table
      :headers="headers"
      :items="expenses"
      :items-per-page="10"
      sort-by="date"
      class="elevation-1"
    >
      <template v-slot:item.action="{ item }">
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </base-card>
</template>

<script>
//import ExpenseList from "./ExpenseList.vue";
import BarGraph from "./BarGraph.vue";

export default {
  components: {
    BarGraph,
  },
  //props: ["expenses"],
  data() {
    return {
      headers: [
        {
          text: "Amount",
          align: "start",
          sortable: false,
          value: "amt",
        },
        { text: "Category", value: "type" },
        { text: "Date", value: "date" },
        { text: "Description", value: "description" },
        { text: "Actions", value: "action", sortable: false },
        { text: "ID", value: "id", align: " d-none" },
      ],
      expenses: [
        {
          id: Math.random(),
          amt: 30,
          type: "General Expenses",
          date: "2020-12-04",
          description: "Dinner",
        },
        {
          id: Math.random(),
          amt: 67,
          type: "Misc",
          date: "2020-05-04",
          description: "I bought a new dress",
        },
        {
          id: Math.random(),
          amt: 134,
          type: "Shopping",
          date: "2020-05-04",
          description: "Microwave oven",
        },
        {
          id: Math.random(),
          amt: 159,
          type: "Travel",
          date: "2020-07-04",
          description: "Air tickets to Bangkok",
        },
        {
          id: Math.random(),
          amt: 14,
          type: "General Expenses",
          date: "2020-09-04",
          description: "Simple Lunch",
        },
      ],
    };
  },
  methods: {
    deleteItem(item) {
      const index = this.expenses.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.expenses.splice(index, 1);
    },
  },
  computed: {
    expenseDataForGraph: function () {
        let result = new Array(12).fill(0);
        for(var i=0; i<this.expenses.length; i++) {
            let data = this.expenses[i]
            let dateObj = new Date(data.date);
            let month = dateObj.toLocaleString("en-us", {
              month: "2-digit",
            });
            result[Number(month)-1] += data.amt
        }
                console.log(result)
        return result
    },
  },
  mounted() {
    this.$root.$on("eventing", (data) => {
      this.expenses.unshift(data);
    });
  },
};
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