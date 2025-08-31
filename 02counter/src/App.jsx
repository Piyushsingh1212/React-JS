import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {

  let [Counter,setCounter] = useState(15)

  //let Counter = 5;

  const addValue = () => {
    console.log("clicked" , Counter);
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
 

  }

  const removeValue = () => {
    setCounter(Counter-1);
     
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value : {Counter}</h2>

    <button
    onClick={addValue
    
    }
    >Add value</button>
    <br/>
    <button 
    onClick={removeValue}>Remove value</button>
    

    </>
  )

}
export default App
