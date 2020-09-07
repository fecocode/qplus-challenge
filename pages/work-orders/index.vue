<template>
  <div v-if="loading" class="container">
    <a-spin>
      <a-icon slot="indicator" type="loading" spin  class="spin"/>
    </a-spin>
  </div>
  <a-table :data-source="workOrders" :columns="columns" v-else>
    <div
      slot="filterDropdown"
      slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
      style="padding: 8px"
    >
      <a-input
        v-ant-ref="c => (searchInput = c)"
        :placeholder="column.title"
        :value="selectedKeys[0]"
        style="width: 188px; margin-bottom: 8px; display: block;"
        @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
        @pressEnter="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
      />
      <a-button
        type="primary"
        icon="search"
        size="small"
        style="width: 90px; margin-right: 8px"
        @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
      >
        {{$t('search')}}
      </a-button>
      <a-button size="small" style="width: 90px" @click="() => handleReset(clearFilters)">
        {{$t('reset')}}
      </a-button>
    </div>
    <a-icon
      slot="filterIcon"
      slot-scope="filtered"
      type="search"
      :style="{ color: filtered ? '#108ee9' : undefined }"
    />
    <template slot="customRender" slot-scope="text, record, index, column">
      <span v-if="searchText && searchedColumn === column.dataIndex" class="work-order">
        <template
          v-for="(fragment, i) in text
            .toString()
            .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
        >
          <span @click="goToOrder(record.key)" :key="`s-${i}`">
            <mark
              v-if="fragment.toLowerCase() === searchText.toLowerCase()"
              :key="i"
              class="highlight"
              >{{ fragment }}</mark>
            <template v-else>{{ fragment }}</template>
          </span>
        </template>
      </span>
      <template v-else>
        <div class="work-order" @click="goToOrder(record.key)">{{ text }}</div>
      </template>
    </template>
  </a-table>
</template>

<script>

import services from '~/services';
import helpers from '~/helpers';

const {
  workOrdersService,

} = services;

const {
  workOrdersFormatter,
} = helpers;


export default {

  meta: {
    breadcrumbs: [
      {
        name: 'home',
        link: 'index'
      },
      {
        name: 'workOrders',
        link: 'work-orders'
      },
    ]
  },
  
  data() {
    return {
      loading: true,

      workOrders: [],
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      columns: [
        
        {
          title: this.$t('orderNumber'),
          dataIndex: 'orderNumber',
          key: 'orderNumber',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.orderNumber
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          },
        },
        {
          title: this.$t('description'),
          dataIndex: 'description',
          key: 'description',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.description
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: this.$t('startDate'),
          dataIndex: 'dateStart',
          key: 'dateStart',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.dateStart
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
      ],
    };
  },
  methods: {
    handleSearch(selectedKeys, confirm, dataIndex) {
      confirm();
      this.searchText = selectedKeys[0];
      this.searchedColumn = dataIndex;
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = '';
    },

    goToOrder(id){
      this.$router.push({name:`work-orders-id___${this.$i18n.locale}`, params:{id}});
    }
  },

  async fetch() {
    try {
      const workOrdersRaw = await workOrdersService.getAll();
      this.workOrders = workOrdersRaw.data.list.map(wo => workOrdersFormatter(wo));
    }catch (err) {
      this.$nuxt.error({statusCode: 500, retry:{name:`work-orders___${this.$i18n.locale}`}});
    }finally {
      this.loading = false;
    }
  }
};
</script>
<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.work-order{
  cursor: pointer;
  width: 110%;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spin {
  font-size: 50px;
}
</style>
