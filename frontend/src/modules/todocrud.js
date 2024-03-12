import { ref} from 'vue'


const getTodos = () => {
  const state = ref({
    newAuthor: '',
    todos: {}
  })

  const GetAllTodos = async () => {
    try {
       await fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => {
        state.value.todos = data
        // debugger
      })
    }
    catch(error) {
      console.log(error) // do different error to showcase - line 15 wrong name + line13 with incorrect path
    }
  }


  const newTodo = () => {
    const requstOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        //auth-token:state.token
      },
      body: JSON.stringify({
        author: state.value.newAuthor, //.value da det er en ref
        todo: state.value.newTodoItem
      })
    }
    fetch("http://localhost:3000/todos/new", requstOptions) 
  }

  const deleteTodo = (_id) => {
    fetch("http://localhost:3000/todos/delete/" + _id,  { method: "DELETE",}) 
.then(() => {
     
    })
  }

  const editTodo = (_id) => {
    const requstOptions = {
      method: "PUT"
    }
    fetch("http://localhost:3000/todos/update/" + _id, requstOptions) 
    .then(res => res.body)
    .then(res => {console.log(res)})
  }

  return {
    state,
    GetAllTodos,
    newTodo,
    deleteTodo,
    editTodo,
  }

}

export default getTodos
  
  