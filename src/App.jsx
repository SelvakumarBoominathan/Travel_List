const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 12, packed: false }
];


import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
      
    </div>
  )
}

export default App;



function Logo() {
  return  <h1>🏢 Daily Tasks 📝</h1>
};


function Form() {

  const today = new Date();
  const date = today.toISOString().slice(0, 10);

  const handleSubmit = () => {}

  return (
  
  <form className="add-form" onSubmit={handleSubmit}>
    
    <h3>Listdown the tasks for today!  Date : {date}</h3>
    <select>
    {Array.from({length:10}, (_, index) =>(
      <option value={index + 1} key={index + 1}>{index + 1}</option>
    ))}
    </select>
    <input type="text" placeholder= "Tasks here..."></input>
    <button>Add</button>
    

  </form>

)};


function PackingList() {
  return(
    <div className="list">
    <ul style={{overflow:'hidden'}}>
      {initialItems.map((item)=>(
        <li key={item.id}>
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
     <em> 📝 you have X pending tasks on your list , and you have completed X (X%) in it. </em>
    </footer>
  )
};