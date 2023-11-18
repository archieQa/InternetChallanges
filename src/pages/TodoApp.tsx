import {useState, useEffect} from 'react'

const TodoApp = () => {
  const [todos , setTodos] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('todos')) || [];
    return storedTasks;
  }); 
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setTodos((prevTodos) => [...prevTodos, newTodo]); 
    setNewTodo(''); 
  }
  const RemoveItem = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index)); //keeps all the items in the array whos index are not indexi aty 
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  useEffect(() => {
    if(!todos || todos.length === 0) {
    const storedTasks = JSON.parse(localStorage.getItem('todos')) || []; 
    setTodos(storedTasks)
    }
   }, [])

  const handleInputChange  = (e) => {
    setNewTodo (e.target.value); 
  } 
  return (
   <>
   <div className='pt-7 '>
    <label>
      <input  type='text' placeholder='Todo' value={newTodo} onChange={handleInputChange} >
      </input>
    </label>
    <button onClick={handleSubmit}>Add to do</button>
   </div>
   <div>
    {todos.map((item ,index) => (
      <div>
      <li key={index}>{item}</li>
      <button onClick={() => RemoveItem(index)}>Delete</button>
      </div>
  )) }
   </div>
   </>
  )
}

export default TodoApp
