const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 12, packed: false }
];


import { useState } from 'react'
import './App.css'

function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item){
      setItems((items) => [...items, item])
  }

  return (
    <div className='app'>
    <Logo/>
    <Form  handleAddItems = {handleAddItems}/>
    <PackingList  items={items}/>
    <Stats/>
      
    </div>
  )
}

export default App;



function Logo() {
  return  <h1>🏢 Daily Tasks 📝</h1>
};







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





function PackingList( {items} ) {
  return(
    <div className="list">
    <ul style={{overflow:'hidden'}}>
      {items.map((item)=>(
        <li key={item.description}>
          <span style={!item.packed? null: { textDecoration: 'line-through'}}>
          {item.quantity} {item.description}
          </span>
          <button>❌</button>
          </li>
      ))} 
    </ul>

</div>
  )
};


function Stats() {
  return(
    <footer className='stats'>
     <em> 📝 you have <span>0</span> pending tasks on your list , and you have completed <span>0</span> (<span style={{color: "yellow"}}>0%</span>) in it. </em>
    </footer>
  )
};