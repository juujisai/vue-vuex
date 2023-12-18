import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      notifications: [
        {
          id: "test",
          title: "Report",
          message: "Success",
          status: "success",
          delay: 5000,
          show: true,
        },
      ],
    };
  },
  getters: {
    notifications(state) {
      return state.notifications;
    },
  },
  mutations: {
    updateNotifications(state, payload) {
      state.notifications = payload;
    },
  },
  actions: {
    change(state, payload) {
      state.commit("updateNotifications", payload);
    },
    add(state, payload) {
      state.commit("updateNotifications", [
        ...state.state.notifications,
        payload,
      ]);
    },
  },
});

export default store;
