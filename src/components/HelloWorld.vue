<template>
  <MDBToast
    v-model="content.show"
    autohide
    :delay="content.delay"
    appendToBody
    position="top-right"
    :stacking="true"
    width="350px"
    :toast="content.status"
    @close="removeNotification(content.id)"
  >
    <template #title> {{ content.title }} - {{ content.id }} </template>
    <template #small> </template>
    {{ content.message }}
  </MDBToast>
</template>

<script setup lang="ts">
import { MDBToast } from "mdb-vue-ui-kit";
// import { useStore } from "vuex";
import { ref, onMounted, watch, PropType } from "vue";

interface Notification {
  title: string;
  id: string;
  message: string;
  status: string;
  delay: number;
  show: boolean;
}

const props = defineProps({
  notify: {
    type: Object as PropType<Notification>,
    required: true,
  },
});
// const store = useStore();
const removeNotification = async (id: string) => {
  console.log("removeNotification", id);
  // await store.dispatch("removeNotification", id);
};

const content = ref<Notification>({
  title: "",
  id: "",
  message: "",
  status: "",
  delay: 0,
  show: false,
});

watch(
  () => props.notify,
  (curr) => {
    content.value = curr;
  }
);

onMounted(() => {
  content.value = props.notify;
});
</script>
