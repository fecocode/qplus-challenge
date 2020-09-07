export const state = () => ({
  breadcrumbs: [
    {
      name: 'Inicio',
      link: 'index___es'
    },
  ],
})

export const mutations = {
  SET_BREADCRUMB(state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs;
  }
}
