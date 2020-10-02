<template>
  <div class="container">
    <PasswordRecovery></PasswordRecovery>
  </div>
</template>

<script>
export default {
  layout: "login",
  name: "passwordRecovery"
};
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 359px;
  height: 438px;
  background-color: #f6e8d9;
  margin-top: 7%;
  border-radius: 2rem;
  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.3);
}

</style>
