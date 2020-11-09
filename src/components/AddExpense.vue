<template>
  <div>
    <base-dialog
      v-if="inputIsInvalid"
      title="Invalid Input"
      @close="confirmError"
    >
      <template #default>
        <p>The expense amount and date of expense is required.</p>
        <p>
          Please check all the inputs stated above and make sure you enter some value into each input field.
        </p>
      </template>
      <template #actions>
        <!-- <base-button @click="confirmError">Okay</base-button> -->
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="amt">Amount</label>
          <input
            id="amt"
            name="amt"
            type="text"
            v-model="amt"
            @keypress="onlyForCurrency"
          />
        </div>
        <div class="form-control">
          <label for="expensetype">Expense Type</label>
          <v-select
            :items="[
              'General Expenses',
              'Shopping',
              'Utility',
              'Travel',
              'Misc',
            ]"
            dense
            outlined
            v-model="type"
          ></v-select>
        </div>
        <div class="form-control">
          <label for="date">Date</label>
          <v-menu
            v-model="dateMenu"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                readonly
                v-on="on"
                class="ma-0 pa-0 form-label"
                dense
                outlined
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @change="dateMenu = false"
              :no-title="true"
            ></v-date-picker>
          </v-menu>
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            v-model="description"
          ></textarea>
        </div>
        <div>
          <base-button type="submit">Submit</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "",
      amt: 0,
      description: "",
      date: "",
      inputIsInvalid: false,
      dateMenu: false,
      //items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  methods: {
    submitData() {
      if (Number(this.amt) === 0 || this.date.trim() === "") {
        this.inputIsInvalid = true;
        return;
      }
      this.$root.$emit("eventing", {
        id: Math.random(),
        amt: Number(this.amt),
        date: this.date,
        type: this.type,
        description: this.description,
      });
      this.type = "";
      this.amt = 0;
      this.description = "";
      this.date = "";
    },
    onlyForCurrency($event) {
      // console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;

      // only allow number and one dot
      if (
        (keyCode < 48 || keyCode > 57) &&
        (keyCode !== 46 || this.amt.indexOf(".") != -1)
      ) {
        // 46 is dot
        $event.preventDefault();
      }

      // restrict to 2 decimal places
      if (
        this.amt != null &&
        this.amt.indexOf(".") > -1 &&
        this.amt.split(".")[1].length > 1
      ) {
        $event.preventDefault();
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>