<template>
  <div class="budget-wrap">
    <el-card :header="header"  style="font-size: 18px;">
      <template v-if="!isEmpty">

        <div class="selection">
           <el-select style="width: 45%;"
          v-model="order.type"
          placeholder="Order by..."
          class="select"
        >
          <el-option label="Ascending" value="ASCENDING"></el-option>
          <el-option label="Descending" value="DESCENGING"></el-option>
          <el-option label="By time" value="TIME"></el-option>
        </el-select>



        <el-select style="width: 45%;"
          v-model="filter.type"
          placeholder="Filter by..."
          class="select"
        >
          <el-option label="Income" value="INCOME"></el-option>
          <el-option label="Outcome" value="OUTCOME"></el-option>
          <el-option label="All" value="ALL"></el-option>
        </el-select>
        </div>

        <BudgetListItem
          v-for="(item, prop) in filtered"
          :key="prop"
          :item="item"
          @deleteItem="deleteItem"
        />
      </template>

      <el-alert
        v-else
        :title="emptyTitle"
        type="warning"
        description="no budget items"
        show-icon
      >
      </el-alert>
    </el-card>
  </div>
</template>

<script>
import BudgetListItem from "./BudgetListItem";
import '../plugins/functions';
import {filterList} from '../plugins/functions';
var _ = require('lodash');
export default {
  name: "BudgetList",
  components: { BudgetListItem },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: "Budget list",
    emptyTitle: "Emppty list",
    order: {
      type: "TIME",
    },
    filter: {
      type: "ALL",
    }
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
    ordered() {
      if (this.order.type == 'ASCENDING') {
        return _.orderBy(this.list, "value", "asc");
      } else if (this.order.type == 'DESCENGING') {
        return _.orderBy(this.list, "value",  "desc");
      } else {
        return _.sortKeysBy(this.list);
      }
    },
  filtered() {
      return filterList(this.ordered, this.filter.type);
    }
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    }
  },
};
</script>

<style scoped>
.budget-wrap {
  max-width: 500px;
  margin: auto;
}

.el-card {
  background-color: cornsilk;
}
.el-alert--warning.is-light {
  background: white;
}
.selection {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
