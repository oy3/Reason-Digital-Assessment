export default {
    state: {
        pages: [], // Your pages data will be loaded from the JSON file
        activePageId: null
    },
    mutations: {
        setPages(state, pages) {
            state.pages = pages;
        },
        setActivePageId(state, id) {
            state.activePageId = id;
        }
    },
    actions: {
        async fetchPages({ commit }) {
            // Simulate asynchronous data fetching (replace with actual HTTP request)
            const response = await fetch('../conent/en_data.json');
            const data = await response.json();

            commit('setPages', data.pages);
        },
        setActivePage({ commit }, id) {
            commit('setActivePageId', id);
        }
    },
    getters: {
        activePage: (state) => {
            return state.pages.find((page) => page.id === state.activePageId) || {};
        }
    }
};
