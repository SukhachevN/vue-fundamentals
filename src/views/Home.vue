<template>
  <AddTask v-show="showAddTaskVal" @createTask="createTask" />
  <Tasks @changeRemind="changeRemind" @deleteTask="deleteTask" :tasks="tasks" />
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
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    deleteTask(delId) {
      if (confirm('Ban chắc chắn à?')) {
        this.tasks = this.tasks.filter(({ id }) => id !== delId);
      }
    },
    changeRemind(remindId) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === remindId) {
          return {
            ...task,
            reminder: !task.reminder,
          };
        }
        return task;
      });
    },
    createTask(task) {
      this.tasks = [...this.tasks, task];
    },
  },
  created() {
    this.tasks = [];
  },
};
</script>

<style></style>
