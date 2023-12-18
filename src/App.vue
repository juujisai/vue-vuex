<template>
  <div v-if="store.state.notifications.length > 0">
    <span v-for="notification in store.state.notifications">
      <Notification :notify="notification" :key="notification.id" />
    </span>
  </div>
  <MDBBtn @click="handleClick">Update toast</MDBBtn>
  <MDBBtn @click="addNewToast">Add toast</MDBBtn>
</template>
<script setup lang="ts">
import Notification from "./components/HelloWorld.vue";
//@ts-ignore
import { useStore } from "vuex";
import { MDBBtn } from "mdb-vue-ui-kit";
import { ref } from "vue";

const store = useStore();

const changedTimes = ref(0);

const handleClick = async () => {
  await store.dispatch("change", [
    {
      title: "Title 2",
      id: "test2",
      message: changedTimes.value % 2 ? "success" : "danger",
      status: changedTimes.value % 2 ? "success" : "danger",
      delay: 5000,
      show: true,
    },
  ]);

  changedTimes.value++;
};

const addNewToast = async () => {
  await store.dispatch("add", {
    title: "Title 2",
    id: "test2" + Math.random(),
    message: "success",
    status: "success",
    delay: 5000,
    show: true,
  });
};
</script>
