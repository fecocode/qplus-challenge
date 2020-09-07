export default ({ route, app }) => {
  console.log(route.meta);
  if(route.meta.length > 0 && route.meta[0].breadcrumbs !== undefined){
    const breadcrumbs = route.meta[0].breadcrumbs
    .map(breadcrumb => {
      return {
        name: breadcrumb.name,
        link: `${breadcrumb.link}___${app.i18n.locale}`
      }
    });
    app.store.commit('SET_BREADCRUMB', breadcrumbs)
  }
}
