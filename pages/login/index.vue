<template>
  <div class="form-container">
    <div>
      <login v-if="recovery == false" @click="handleClick"></login>
      <PasswordRecovery v-else @click="handleClick"></PasswordRecovery>
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
  name: "layoutView",
  data() {
    return {
      recovery: false
    };
  },
  methods: {
    formSubmit() {
      console.log(this.userForm);
    },
    handleClick() {
      this.recovery = !this.recovery;
      console.log(this.recovery);
    }
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 25%;
  background-color: #001529;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px black;
}
</style>
