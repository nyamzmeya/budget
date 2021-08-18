<template>
  <div id="app">
    <header class="header">
      Budget calculator
    </header>
    <Form @submitForm="onFormSubmit" />
    <BudgetList :list="list" @deleteItem="onDeleteItem" />
    <TotalBalance :total="totalBalance" />
  </div>
</template>

<script>
import BudgetList from "./components/BudjetList";
import TotalBalance from "./components/TotalBalance";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: { BudgetList, TotalBalance, Form },
  data: () => ({
    list: {},
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
    onFormSubmit(data) {
      if (data.type == "OUTCOME") {
        data.value = -data.value;
      }
      const newObj = {
        ...data,
        id: new Date(),
      };

      this.$set(this.list, newObj.id, newObj);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
}

body {
  margin: 0px;
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
}

header {
  width: 500px;
  color:cornsilk;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  border-radius: 5px;
  background: url('./assets/imageedit_1_3376649672.png');
  box-shadow: 0 6px 12px 0 rgb(0 0 0 / 50%);
  height: 150px;
  line-height: 150px;
  font-weight: 800;
  font-size: 40px;
}
</style>
