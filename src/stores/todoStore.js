import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(todo) {
      this.todos.push({ text: todo, done: false });
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleTodoStatus(index) {
      this.todos[index].done = !this.todos[index].done;
    }
  },
  getters: {
    incompleteTodosCount: (state) => state.todos.filter(todo => !todo.done).length
  }
});
