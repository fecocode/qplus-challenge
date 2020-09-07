module.exports = {
  head: {title: 'Qplus Challenge'},
  target: 'static',
  components: true,
  css: ['ant-design-vue/dist/antd.css', '~/assets/main.css'],
  plugins: ['@/plugins/antd-ui'],
  router: {
    middleware: ['breadcrumb'],
  },
  modules: [
    'nuxt-i18n',
  ],

  i18n: {
    locales: [
      {
        code: 'es',
        name: 'Español'
      },
      {
        code: 'en',
        name: 'English'
      }
    ],
    defaultLocale: 'es',
    // strategy: 'prefix_and_default',
    vueI18n: {
      fallbackLocale: 'en',
      messages:{
        en:{
          welcome: 'Welcome',
          workOrders: 'Work Orders',
          home: 'Home',
          detail: 'Detail',
          orderNumber: 'Order number',
          description: 'Description',
          startDate: 'Start date',
          order: 'Order',
          goBack: 'Go back',
          edit: 'Edit',
          moreOptions: 'More options',
          notFound: 'Page not found',
          goHome: 'Go Home',
          dataError: 'An error occurred while getting the data',
          retry: 'Retry',
          demo: 'Demo developed by Feco',
          search: 'Search',
          reset: 'Reset',
          language: 'Cambiar idioma a',
        },
        es: {
          welcome: 'Bienvenidos',
          workOrders: 'Ordenes de trabajo',
          home: 'Inicio',
          detail: 'Detalle',
          orderNumber: 'Numero de orden',
          description: 'Descripción',
          startDate: 'Fecha de inicio',
          order: 'Orden',
          goBack: 'Volver',
          edit: 'Editar',
          moreOptions: 'Más opciones',
          notFound: 'La página solicitada no fue encontrada',
          goHome: 'Ir a la página principal',
          dataError: 'Un error ocurrió al obtener los datos',
          retry: 'Reintentar',
          demo: 'Demo desarrollada por Feco',
          search: 'Buscar',
          reset: 'Limpiar',
          language: 'Change language to',
        }
      }
    }
  }
};
