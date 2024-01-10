import { createStore } from 'vuex';

export default createStore({
  state: {
    menuItems: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'The Digital Divide', to: '/divide' },
      { label: 'Get Involved', to: '/' },
      { label: 'Our Network', to: '/' },
      { label: 'Insights', to: '/' },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
