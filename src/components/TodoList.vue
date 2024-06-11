<template>
  <div class="todo-container">
    <h1>TUGAS YANG BELUM NYA BANG</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task"/>
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span :class="{ done: todo.done }" @click="toggleTodoStatus(index)">
          {{ todo.text }}
        </span>
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ul>
    <p>Incomplete tasks: {{ incompleteTodosCount }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';

export default {
  setup() {
    const newTodo = ref('');
    const todoStore = useTodoStore();

    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        todoStore.addTodo(newTodo.value);
        newTodo.value = '';
      }
    };

    const removeTodo = (index) => {
      todoStore.removeTodo(index);
    };

    const toggleTodoStatus = (index) => {
      todoStore.toggleTodoStatus(index);
    };

    return {
      newTodo,
      todos: todoStore.todos,
      addTodo,
      removeTodo,
      toggleTodoStatus,
      incompleteTodosCount: todoStore.incompleteTodosCount
    };
  }
};
</script>

<style scoped>
.todo-container {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

input {
  width: calc(100% - 22px); /* Menyesuaikan padding */
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #ff7e5f;
  color: white;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

span {
  flex-grow: 1;
  cursor: pointer;
}

span.done {
  text-decoration: line-through;
  color: gray;
}
</style>
