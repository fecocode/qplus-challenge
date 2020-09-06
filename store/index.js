export const state = () => ({
  breadcrumbs: [
    {
      name: 'Inicio',
      link: '/'
    },
  ],
})

export const mutations = {
  SET_BREADCRUMB(state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs;
  }
}
