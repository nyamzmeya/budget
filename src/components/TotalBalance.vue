<template>
    <div class="total-value"> 
        <i class="el-icon-money" style="font-size: 30px; color: green; margin-right: 15px;"></i>
        <div>
          Balance: <span class="total" :style="{ color: `${color}` }"> {{total}} </span>
        </div>
      </div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    color () {
        if (this.total == 0) {
          return 'black'
        } else if (this.total > 0) {
          return 'green'
        } else {
          return 'red'
        }
    }
    }
  };
</script>

<style scoped>
.total-value {
  background-color: cornsilk;
  box-shadow: 0 6px 12px 0 rgb(0 0 0 / 50%);
  padding: 10px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content:center;
}
.total {
  font-weight: bold;
}
</style>