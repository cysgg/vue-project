<template>
  <div>
    <h3>具有数据校验功能的表单组件——Form</h3>
    <cysg-form ref="form" :model="formValidate" :rules="ruleValidate">
      <cysg-form-item label="用户名" prop="name">
        <span>点我输入</span>
        <!-- <cysg-input v-model="formValidate.name"></cysg-input> -->
      </cysg-form-item>
      <cysg-form-item label="邮箱" prop="mail">
        <span>点我输入</span>
        <cysg-input v-model="formValidate.mail"></cysg-input>
      </cysg-form-item>
    </cysg-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
    <cysg-button to="https://juejin.im" target="_blank"
      ><span>hello</span></cysg-button
    >
  </div>
</template>
<script>
import CysgInput from "./CysgInput";
import CysgFormItem from "./form/CysgFormItem";
import CysgForm from "./form/CysgForm";
import CysgButton from "./CysgButton";

export default {
  components: {
    CysgInput,
    CysgFormItem,
    CysgForm,
    CysgButton,
  },
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          window.alert("提交成功");
        } else {
          window.alert("表单校验失败");
        }
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    },
  },
};
</script>
