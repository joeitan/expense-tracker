<template>
  <div>
    <base-card>
      <button
        @click="setSelectedTab('expense-table')"
        :class="{ flat: !selectedExpenseTable, selected: selectedExpenseTable }"
      >
        Expenses
      </button>
      <button
        @click="setSelectedTab('add-expense')"
        :class="{ flat: !selectedAddExpense, selected: selectedAddExpense }"
      >
        Add Expense
      </button>
      <!-- <base-button @click="setselectedtab('expense-summary')">{{ selectedTab }}</base-button> -->
    </base-card>
    <!-- <component :is="selectedTab" v-bind:expenses="currentProps"></component> -->
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import ExpenseTable from "./ExpenseTable.vue";
import AddExpense from "./AddExpense.vue";

export default {
  components: {
    ExpenseTable,
    AddExpense,
  },
  data() {
    return {
      selectedTab: "expense-table",
      selectedExpenseTable: true,
      selectedAddExpense: false,
    };
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
      if (this.selectedTab === "expense-table") {
        this.selectedExpenseTable = true;
        this.selectedAddExpense = false;
      }

      if (this.selectedTab === "add-expense") {
        this.selectedExpenseTable = false;
        this.selectedAddExpense = true;
      }
    },
  },
  mounted() {
    this.$root.$on("eventing", (data) => {
      if(data.amt) {
        this.setSelectedTab("expense-table")
      }
    })
  },
};
</script>

<style scoped>
.selected {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

.selected:hover,
.selected:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: transparent;
  color: #3a0061;
  border: none;
  cursor: pointer;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
  border-color: #270041;
}
</style>