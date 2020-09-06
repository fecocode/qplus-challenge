<template>
  <div class="container">
    <template v-if="error.statusCode === 404">
      <a-icon type="meh" theme="twoTone" class="icon"/>
      <h1 >No encontramos la página solicitada</h1>
      <NuxtLink to="/">Ir a la página principal</NuxtLink>
    </template>
    <template v-if="error.statusCode === 500">
      <a-icon type="exclamation-circle" theme="twoTone" class="icon"/>
      <h1 >Ocurrió un error al obtener los datos</h1>
      <NuxtLink :to="error.retryLink">Reintentar</NuxtLink>
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
