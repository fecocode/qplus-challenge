module.exports = {
  components: true,
  css: ['ant-design-vue/dist/antd.css', '~/assets/main.css'],
  plugins: ['@/plugins/antd-ui'],
  router: {
    middleware: ['breadcrumb'],
  }
};
