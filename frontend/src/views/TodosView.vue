<template>
   <div>
    <h1>All todos</h1>
    <button @click="newTodo()">New todo - static</button>
    <br>
    <input type="text" placeholder="Author" v-model="state.newAuthor">
    <span>Test: {{ state.newAuthor }}</span>
    <br>
    <input type="text" placeholder="Author" v-model="state.newTodoItem">
    <span>Test: {{ state.newTodoItem }}</span>

    <div v-for="todo in state.todos" :key="todo.author">
      <router-link :to="/todo/$(todo._id)"></router-link>
  
        <h4>
          {{todo.author}}
        </h4>
        <p>
          {{todo.todo}}
        </p>
        <button @click="deleteTodo(todo._id)">Delete todo</button>
        <button @click="editTodo(todo._id)">Edit todo</button>
    </div>

   </div>
</template>

<script>
import todocrud from '../modules/todocrud'
import { onMounted } from 'vue'

export default {
   setup() {
     
    const { state, GetAllTodos, newTodo, deleteTodo, editTodo } = todocrud()
  
onMounted(() => {
GetAllTodos()
})
  
   return { state, GetAllTodos, newTodo, deleteTodo, editTodo } 
},


}

</script>

<style lang="css">
    
</style>