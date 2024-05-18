import { useState } from 'react'
import './App.css'

function App() {

  const [tasks, settasks] = useState([]);

  function handleAddTasks(task){
      settasks((tasks) => [...tasks, task])
  }


  //Delete from LIST
  function handleDelete(id){
    settasks( (tasks) => tasks.filter((task) =>task.id !==id))
  }


  function handleToggleTask(id){
      settasks((tasks) => tasks.map((task) => task.id === id? 
      // Since, turnary operator used here the returning element along covered by paranthesis
         {...task, packed: !task.packed} : task)
      )
  }

  return (
    <div className='app'>
    <Logo/>
    <Form  handleAddTasks = {handleAddTasks}/>
    <TaskList  tasks={tasks}  handleDelete={handleDelete}  handleToggleTask={handleToggleTask}/>
    <Stats/>
    </div>
  )
}

export default App;



function Logo() {
  return  <h1>🏢 Daily Tasks 📝</h1>
};





//FORM component

function Form( {handleAddTasks} ) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

 
  const handleSubmit = (e) => {
    //to avoid reloading
    e.preventDefault();

    // if(!description){return}

    const newtask = {description, quantity, packed : false, id : Date.now()}
    console.log(newtask);

    handleAddTasks(newtask)

    setDescription("");
    setQuantity(1);
  }

  const today = new Date();
  const date = today.toLocaleDateString().slice(0, 10);

  return (
  
  <form className="add-form" onSubmit={handleSubmit}>

    <h3>Listdown the tasks for today <span style={{color : "#FF9F66"}}>{date}</span>!</h3>
    <select value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))}>
    {Array.from({length:10}, (_, index) =>(
      <option value={index + 1} key={index + 1}>{index + 1}</option>
    ))}
    </select>
    <input type="text" placeholder= "Tasks here..." value={description} onChange={(e)=>{setDescription(e.target.value)}} required></input>
    <button>Add</button>
    

  </form>

)};






//TaskList component

function TaskList( {tasks, handleDelete, handleToggleTask} ) {
  return(
    <div className="list">
    <ul style={{overflow:'hidden'}}>
      {tasks.map((task)=>(
        <li key={task.id}>
          <input type='checkbox' value={task.packed}  onChange={() => {handleToggleTask(task.id)}}/>
          <span style={!task.packed? null: { textDecoration: 'line-through'}}>
          {task.quantity} {task.description}
          </span>
          <button onClick={() => handleDelete(task.id)}>❌</button>
          </li>
      ))} 
    </ul>

</div>
  )
};



//Stats component

function Stats() {

  return(
    <footer className='stats'>
     <em> 📝 you have <span>0</span> pending tasks on your list , and you have completed <span>0</span> (<span style={{color: "yellow"}}>0%</span>) in it. </em>
    </footer>
  )
};