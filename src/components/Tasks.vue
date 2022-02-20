<template>
  <div v-for="task in $store.state.tasks" :key="task.id">
    <Task :task="task" />
  </div>
</template>

<script>
import Task from './Task';
export default {
  name: 'Tasks',
  components: { Task },
};
</script>
