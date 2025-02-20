import { useEffect, useState } from "react"
import FetchData from "./FetchData"

function App(){
  const [counter, setCounter] = useState(0)
  // This useEffect will be called when ever the state get updated or re-rendered this non- dependency useeffect will be called
  useEffect(()=>{
    console.log('NON-Dependency Array ==>This will be called when mounting time as well reload time, updation time')
  })
  // Empty - Dependency Array
  useEffect(()=>{
    console.log("Empty Dependency Array ===> this useEffect will be called only once on mounting time after UI rendered")
  },[]) 
  //updation
  useEffect(()=>{
    console.log('updation Time ===> This useEffect will we called when that particular state get updated or changed')
  },[counter])
  let inc = ()=>{
    setCounter(()=> counter + 1)
  }
  let dec = ()=>{
    setCounter(()=> counter - 1)
  }
  return(
    <div>
      <h1>We are working with useEffect Hook</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={()=> inc()}>Increament</button>
      <button onClick={()=>dec()}>Decreament</button>
    <FetchData></FetchData>
    </div>
  )
}
export default App