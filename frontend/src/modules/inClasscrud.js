const getTodosInClass = () => {

    const fetchTodos = async () => {
 try {
    const response = await fetch("http://localhost:3000/todos")
    if (!response.ok) {
        throw new Error("Network response was not ok")
    }
    const data = await response.json()
    todos.value = data
 }

 catch (error) {
        console.log(error)
 }
    }
    const todos = ref([])
    return {
        todos
        
    }
}
export default getTodosInClass 