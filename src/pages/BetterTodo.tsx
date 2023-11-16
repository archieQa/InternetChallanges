import { useReducer , useState} from 'react'

const initialState = {
    tasks: [],
    filter: 'all', 
}

const reducer = (state , action) => {
    switch(action.type) {
        case 'ADD_TASK':
        return {...state, tasks: [...state.tasks , action.payload]}
        case 'TOGGLE_TASK':
        return {...state, 
            tasks: state.tasks.map((task) =>
             task.id === action.payload ? 
            {...task , completed: !task.completed}
            : task)}
        case 'REMOVE_TASK':
            return {...state, tasks: state.tasks.filter((task) => task.id !== action.payload) }
        case 'SET_FILTER': 
        return {...state, filter: action.payload}
        default:
            return state;
    }   

}
    const genereateId = () => Date.now(); 

const BetterTodo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [newTask, setNewTask] = useState({title: '', description: ''})

    const addTask = () => {
        const task = { id: genereateId(), ...newTask, completed: false };
        dispatch({ type: 'ADD_TASK', payload: task });
        setNewTask({ title: '', description: '' });
      };

    const toggleTask = (taskId) => {
        dispatch({type : 'TOGGLE_TASK', payload: taskId})
    }

    const removeTask = (taskId) =>{
        dispatch({type: 'REMOVE_TASK' ,payload:taskId})
    }

    const setFilter = (filter) =>{
        dispatch({type: 'SET_FILTER' ,payload:filter})
    }

    const filteredTasks = () => {
        switch(state.filter) {
        case "all": 
        return state.tasks;
        case "active":
        return state.tasks.filter((task) => !task.completed)
        case "completed": 
        return state.tasks.filter((task) => task.completed)
        default:
            return state.task;
        }
    }

    const completedTasks = state.tasks.filter((task) => task.completed)

  return (
    <div>
        <h1>Better to do</h1>
    <input
      type="text"
      placeholder="Task title"
      value={newTask.title}
      onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
    />
    <input
      type="text"
      placeholder="Task description"
      value={newTask.description}
      onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
    />
    <button onClick={addTask}>Add Task</button>

    <ul>
      {filteredTasks().map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {task.title} - {task.description}
          <button onClick={() => removeTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>

      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>

    <p>Total tasks: {state.tasks.length}</p>
    <p>Completed tasks: {completedTasks.length}</p>
  </div>
);
};
  


export default BetterTodo
