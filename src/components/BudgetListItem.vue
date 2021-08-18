<template>
  <div class="list-item">
    <div class="budget-comment">{{ item.comment }}</div>
    <div class="budget-value">{{ item.value }}</div>
    <i class="el-icon-top" v-if="item.value >= 0" style="color: green"></i>
    <i class="el-icon-bottom" v-else style="color: red"></i>
    <el-button type="danger" @click="centerDialogVisible = true" icon="el-icon-delete" circle
      ></el-button
    >

    <el-dialog
      title="Delete"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <span
        >Do you want to delete this note?</span
      >
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="deleteItem(item.id)"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "BudgetListItem",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    deleteItem(id) {
        this.centerDialogVisible = false;
      this.$emit("deleteItem", id);
    },
  },
  data() {
    return {
      centerDialogVisible: false,
    };
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 6px 12px 0 rgb(0 0 0 / 50%);
  padding: 10px;
  margin-bottom: 30px;
  background: white;
  border-radius: 5px;
}

.budget-value {
  font-weight: bold;
  margin-left: 180px;
}



i {
    font-size: 26px;
}
</style>