<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="homePage"
      @showAddTask="$emit('showAddTask')"
      :text="showAddTaskVal ? 'Close' : 'Add Task'"
      :color="showAddTaskVal ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from './Button.vue';
export default {
  name: 'Header',
  props: {
    title: String,
    showAddTaskVal: Boolean,
  },
  components: { Button },
  emits: ['showAddTask'],
  computed: {
    homePage() {
      return this.$route.path === '/';
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
