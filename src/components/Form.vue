<template>
  <el-card class="box-card">
    <el-form :model="formData" :rules="rules" ref="addItemForm">
      <el-form-item label="Type" prop="type">
        <span slot="label" style="font-size: 18px;">Type</span>
        <el-select
          v-model="formData.type"
          placeholder="Choose type..."
          class="select"
        >
          <el-option label="Income" value="INCOME"></el-option>
          <el-option label="Outcome" value="OUTCOME"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Comment" prop="comment" class="label">
        <span slot="label" style="font-size: 18px;">Comment</span>
        <el-input v-model="formData.comment"></el-input>
      </el-form-item>

      <el-form-item label="Value" prop="value">
        <span slot="label" style="font-size: 18px;">Number</span>
        <el-input v-model.number="formData.value" type="number"></el-input>
      </el-form-item>

      <el-alert
        v-if="formData.error"
        title="Warning"
        type="warning"
        :description="formData.error"
        show-icon
      >
      </el-alert>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="font-size: 18px;">Submit</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    formData: {
      type: "INCOME",
      comment: "",
      value: null,
      error: "",
    },

    rules: {
      comment: [
        {
          required: true,
          message: "Please write some message",
          trigger: "change",
        },
      ],
      value: [
        {
          required: true,
          message: "Please write some value",
          trigger: "change",
        },
        { type: "number", message: "Input must be number", trigger: "blur" },
        {
          type: "number",
          min: 0,
          message: "Number must be positive",
          trigger: "blur",
        },
      ],
    },
  }),

  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid && this.formData.value != 0) {
          this.formData.error = "";
          this.$emit("submitForm", { ...this.formData });
          this.$refs.addItemForm.resetFields();
        } else {
          this.formData.error = "Value can not be zero";
        }
      });
    },
  },
};
</script>

<style scoped>
.box-card {
  max-width: 500px;
  margin: auto;
  margin-bottom: 40px;
}

.select {
  width: 100%;
}

.el-card {
  background-color: cornsilk;
}
.el-form-item__label {
  font-size: 18px;
}
.el-alert--warning.is-light {
  background: white;
}
</style>
