
<template>
  <div class="layout-container">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'LoginLayout',
}
</script>

<style lang="scss" scoped>
  .layout-container{
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;
    background-color: #3D4159;
  }
</style>
