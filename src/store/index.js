import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, delId) {
      state.tasks = state.tasks.filter(({ id }) => id !== delId);
    },
    changeRemind(state, remId) {
      state.tasks = state.tasks.map((task) =>
        task.id === remId
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task
      );
    },
  },
  actions: {
    createTask({ commit }, task) {
      commit('createTask', task);
    },
    deleteTask({ commit }, delId) {
      commit('deleteTask', delId);
    },
    changeRemind({ commit }, remId) {
      commit('changeRemind', remId);
    },
  },
});
