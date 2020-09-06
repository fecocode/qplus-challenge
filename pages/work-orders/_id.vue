<template>
  <a-card hoverable class="card">
    <template slot="actions" class="ant-card-actions">
      <div @click="goBack()">
        <a-icon key="goback" type="arrow-left"/>
        <span>{{$t('goBack')}}</span>
      </div>
      <div class="disabled">
        <a-icon key="edit" type="edit"/>
        <span>{{$t('edit')}}</span>
      </div>
      <div class="disabled">
        <a-icon key="options" type="ellipsis"/>
        <span>{{$t('moreOptions')}}</span>
      </div>
    </template>
    <a-skeleton active :paragraph="{ rows: 1 }" :loading="!workOrder">
      <a-card-meta 
        :title="`${$t('order')} N°: ${ workOrder ? workOrder.orderNumber : ''}`" 
        :description="workOrder ? workOrder.description : ''">
      </a-card-meta>
    </a-skeleton>
    <a-divider/>
    
    <a-skeleton active :paragraph="{ rows: 0 }" :loading="!workOrder">
      <p>
        {{workOrder ? `${$t('startDate')}: ${workOrder.dateStart}` : ''}}
      </p>
    </a-skeleton>
  </a-card>
</template>



<script>
import services from '~/services';
import helpers from '~/helpers';

const { workOrdersService } = services;
const { workOrdersFormatter } = helpers;

export default {
  name: 'workOrderDetail',
  meta: {
    breadcrumbs: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'workOrders',
        link: '/work-orders'
      },
      {
        name: 'detail',
        link: ''
      }
    ]
  },
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
      this.$nuxt.error({statusCode: 500, retryLink:`/work-orders/${id}`});
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

