<template>
  <a-card hoverable class="card">
    <template slot="actions" class="ant-card-actions">
      <div @click="goBack()">
        <a-icon key="goback" type="arrow-left"/>
        <span>Volver</span>
      </div>
      <div class="disabled">
        <a-icon key="edit" type="edit"/>
        <span>Editar</span>
      </div>
      <div class="disabled">
        <a-icon key="options" type="ellipsis"/>
        <span>Más opciones</span>
      </div>
    </template>
    <a-card-meta :title="`Orden N°: ${ workOrder ? workOrder.orderNumber : ''}`" :description="workOrder ? workOrder.description : ''">
    </a-card-meta>
    <a-divider/>
    <p>
      Iniciada: {{workOrder ? workOrder.dateStart : ''}}
    </p>
  </a-card>
</template>



<script>
import services from '~/services';
import helpers from '~/helpers';

const { workOrdersService } = services;
const { workOrdersFormatter } = helpers;

export default {
  name: 'workOrderDetail',
  data(){
    return {
      workOrder: null,
    }
  },
  async fetch(){
    const id = this.$route.params.id;
    try{
      const workOrderRaw = await workOrdersService.getById(id);
      this.workOrder = workOrdersFormatter(workOrderRaw.data.task);
    } catch (err) {
      console.log(err);
    }
    
  },
  methods: {
    goBack(){
      this.$router.push('/work-orders');
    }
  }
}
</script>

<style scoped>
.card{
  width: 90%;
  margin: auto;
}
.disabled{
  cursor: not-allowed;
}
.disabled:hover{
  color: #ccc;
}
span{
  margin: 0 10px;
}
</style>

