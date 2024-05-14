import { useState } from 'react'
import './App.css'

function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item){
      setItems((items) => [...items, item])
  }


  //Delete from LIST
  function handleDelete(id){
    setItems( items => items.filter(item =>item.id !== id))
  }

  return (
    <div className='app'>
    <Logo/>
    <Form  handleAddItems = {handleAddItems}/>
    <TaskList  items={items}  handleDelete={handleDelete}/>
    <Stats/>
      
    </div>
  )
}

export default App;



function Logo() {
  return  <h1>🏢 Daily Tasks 📝</h1>
};





//FORM component

function Form( {handleAddItems} ) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

 
  const handleSubmit = (e) => {
    //to avoid reloading
    e.preventDefault();

    // if(!description){return}

    const newItem = {description, quantity, packed : false, id : Date.now()}
    console.log(newItem);

    handleAddItems(newItem)

    setDescription("");
    setQuantity(1);
  }

  const today = new Date();
  const date = today.toISOString().slice(0, 10);

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

function TaskList( {items, handleDelete} ) {
  return(
    <div className="list">
    <ul style={{overflow:'hidden'}}>
      {items.map((item)=>(
        <li key={item.description}>
          <span style={!item.packed? null: { textDecoration: 'line-through'}}>
          {item.quantity} {item.description}
          </span>
          <button onClick={() => handleDelete(item.id)}>❌</button>
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