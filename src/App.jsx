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
  return  <h1>🌴 For Away 💼</h1>
};
function Form() {
  return (
  
  <div className="add-form">
    <h3>What do you need for your 😍 trip?</h3>
  </div>

)};
function PackingList() {
  return(
    <div className="list">LIST</div>
  )
};
function Stats() {
  return(
    <footer className='stats'>
     <em> 💼 you have X items on your list , and you already packed X (X%) </em>
    </footer>
  )
};