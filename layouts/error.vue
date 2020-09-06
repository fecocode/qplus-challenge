<template>
  <div class="container">
    <template v-if="error.statusCode === 404">
      <a-icon type="meh" theme="twoTone" class="icon"/>
      <h1 >{{$t('notFound')}}</h1>
      <NuxtLink to="/">{{$t('goHome')}}</NuxtLink>
    </template>
    <template v-if="error.statusCode === 500">
      <a-icon type="exclamation-circle" theme="twoTone" class="icon"/>
      <h1 >{{$t('dataError')}}</h1>
      <NuxtLink :to="error.retryLink">{{$t('retry')}}</NuxtLink>
    </template>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style scoped>

.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.icon{
  font-size: 70px;
  margin: 30px;
}

</style>
