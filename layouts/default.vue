<template>
  <a-layout id="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <n-link :to="{ name: `index___${$i18n.locale}` }">
          <img src="/qplus-logo.png" alt="qplus-logo" />
        </n-link>
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item
          v-for="(item, index) in menuItems"
          :key="index"
          @click="redirect(item.link)"
        >
          <a-icon :type="item.icon" />
          <span>{{ item.name }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <div>
          <nuxt-link
            class="normal-link"
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            <a-icon type="sync" />
            {{ `${$t("language")} '${locale.name}'` }}
          </nuxt-link>
        </div>
        <div>
          <span>
            {{ $t("demo") }}
          </span>
          <a href="https://twitter.com/fecocode" target="_blank">
            <a-icon type="twitter-circle" theme="filled" />
          </a>
          <a href="https://github.com/fecocode" target="_blank">
            <a-icon type="github" theme="filled" />
          </a>
          <a href="https://linkedin.com/in/francocolares" target="_blank">
            <a-icon type="linkedin" theme="filled" />
          </a>
        </div>
      </a-layout-header>
      <a-breadcrumb class="breadcrumb">
        <n-link
          :to="
            breadcrumb && index < breadcrumbs.length - 1
              ? { name: breadcrumb.link }
              : ''
          "
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="`b-${index}`"
        >
          <a-breadcrumb-item>{{
            breadcrumb ? $t(breadcrumb.name) : ""
          }}</a-breadcrumb-item>
        </n-link>
      </a-breadcrumb>
      <a-layout-content class="content">
        <Nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>


export default {
  data() {
    return {
      collapsed: false,
    };
  },

  methods: {
    redirect(link){
      this.$router.push({name:link});
    }
  },
  computed: {
    breadcrumbs(){
      return this.$store.state.breadcrumbs;
    },
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    menuItems(){
      return [
        {
          name: this.$t('workOrders'),
          icon: 'tool',
          link: `work-orders___${this.$i18n.locale}`
        },
        {
          name: 'login',
          icon: 'user',
          link: `login___${this.$i18n.locale}`
        }
      ]
    } 
  },
  
};
</script>
<style>

#layout {
  height: auto;
  min-height: 100vh;
}

#layout .header {
  background: #fff;
  padding: 0;
  display: flex;
  align-content: center;
  justify-content: space-between;
}

#layout .header div {
  width: 40%;
  padding: 0 2em;
  display: flex;
  justify-content: flex-end;
}

#layout .header div span {
  margin: 0 10px;
}

#layout .header div a {
  font-size: 1.5em;
  margin: 0 5px;
}

#layout .header div .normal-link {
  font-size: 1em !important;
}

#layout .breadcrumb {
  margin: 1em 2em;
}

#layout .content{
  margin: .5em 1em;
  padding: 2em;
  background: #fff;
  height: fit-content;
}

#layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#layout .trigger:hover {
  color: #1890ff;
}

#layout .logo {
  height: 32px;
  margin: 16px;
}

#layout img{
  max-height: 100%;
  max-width: 100%;
}
</style>
