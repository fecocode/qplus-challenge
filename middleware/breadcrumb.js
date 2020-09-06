export default ({ route, app }) => {
  if(route.meta.length > 0){
    const breadcrumbs = route.meta[0].breadcrumbs;
    app.store.commit('SET_BREADCRUMB', breadcrumbs)
  }
}
