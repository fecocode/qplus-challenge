<template>
  <a-table :data-source="workOrders" :columns="columns">
    <div
      slot="filterDropdown"
      slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
      style="padding: 8px"
    >
      <a-input
        v-ant-ref="c => (searchInput = c)"
        :placeholder="`Search ${column.dataIndex}`"
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
        Search
      </a-button>
      <a-button size="small" style="width: 90px" @click="() => handleReset(clearFilters)">
        Reset
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
          <mark
            v-if="fragment.toLowerCase() === searchText.toLowerCase()"
            :key="i"
            class="highlight"
            >{{ fragment }}</mark>
          <template v-else>{{ fragment }}</template>
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
  
  data() {
    return {
      workOrders: [],
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      columns: [
        
        {
          title: 'Número de orden',
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
          title: 'Descripción',
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
          title: 'Fecha de inicio',
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
      this.$router.push(`/work-orders/${id}`);
    }
  },

  async fetch() {
    try {
      const workOrdersRaw = await workOrdersService.getAll();
      this.workOrders = workOrdersRaw.data.list.map(wo => workOrdersFormatter(wo));
    }catch (err) {
      console.log(err)
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
}
</style>
