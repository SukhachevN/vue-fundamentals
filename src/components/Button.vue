<template>
  <button
    @click="$emit('showAddTask')"
    :style="{ background: color }"
    class="btn"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
  },
  emits: ['showAddTask'],
};
</script>
