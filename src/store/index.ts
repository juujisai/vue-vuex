//@ts-ignore
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
    notifications(state: any) {
      return state.notifications;
    },
  },
  mutations: {
    updateNotifications(state: any, payload: any) {
      state.notifications = payload;
    },
  },
  actions: {
    change(state: any, payload: any) {
      state.commit("updateNotifications", payload);
    },
    add(state: any, payload: any) {
      state.commit("updateNotifications", [
        ...state.state.notifications,
        payload,
      ]);
    },
  },
});

export default store;
