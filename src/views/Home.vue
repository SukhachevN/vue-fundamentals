<template>
  <AddTask v-show="showAddTaskVal" @createTask="createTask" />
  <Tasks @changeRemind="changeRemind" @deleteTask="deleteTask" />
</template>

<script>
import AddTask from '../components/AddTask.vue';
import Tasks from '../components/Tasks.vue';
export default {
  name: 'Home',
  components: { AddTask, Tasks },
  props: {
    showAddTaskVal: Boolean,
  },
};
</script>

<style></style>
