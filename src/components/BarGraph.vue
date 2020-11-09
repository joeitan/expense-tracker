<script>
import { Bar } from "vue-chartjs";

export default {
  props: ["expenses"],
  extends: Bar,
  computed: {
    chartData: function () {
      return this.expenses;
    },
  },
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Total Monthly Expenses",
            backgroundColor: "#f87979",
            data: this.expenses,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
  methods: {
    renderLineChart: function () {
      console.log("called");
      this.renderChart(
        {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Total Monthly Expenses",
              backgroundColor: "#f87979",
              data: this.chartData,
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    },
  },
  watch: {
    expenses: function (newVal, oldVal) {
      //console.log("Prop changed: ", newVal, " | was: ", oldVal);
      //this._chart.destroy();
      //this.renderChart(this.data, this.options);
      this.renderLineChart();
    },
  },
};
</script>
