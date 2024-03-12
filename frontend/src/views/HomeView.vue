<template>
<main></main>
</template>

<script>
// @ is an alias to /src
import inClasscrud from '../modules/inClasscrud.vue'
import { onMounted } from 'vue'

const { todos, fetchTodos } = inClasscrud()

onMounted(() => {
  fetchTodos()
})

console.log("my stuff", todos)

</script>

<style scoped>
.card {
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  display: inline-block;
  text-align: center;
  background-color: #f4f4f4;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>
