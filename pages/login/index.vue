<template>
  <div class="container">
    <div class="form-container">
      <div>
        <login v-if="recovery == false" @click="handleClick"></login>
        <PasswordRecovery v-else @click="handleClick"></PasswordRecovery>
      </div>
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

.container {
  width: 100%;
  height: 100%;
  background-color: #3D4159;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 27%;
  margin-left: auto;
  margin-right: auto;
  background-color: #F6E8D9;
  border-radius: 2rem;
  margin-top: 7%;
  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.3);
}


</style>
