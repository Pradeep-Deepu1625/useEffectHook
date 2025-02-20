import { useEffect, useState } from "react"
import FetchData from "./FetchData"
import Child from "./Child"

function App(){
  const [counter, setCounter] = useState(0)
  // This useEffect will be called when ever the state get updated or re-rendered this non- dependency useeffect will be called
  //  and also this useEffect will be called after rendering of jsx code
  useEffect(()=>{
    alert('parent useEffect at last i am going to exicute')
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


{

  // Here on main thing is the componet rendering is firstly 

}

  return(
    <div>
      {alert('parent I am goind to render lastly')}
      {console.log('i am going rendered lastly')}
      <h1>We are working with useEffect Hook</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={()=> inc()}>Increament</button>
      <button onClick={()=>dec()}>Decreament</button>
    <FetchData></FetchData>
    <Child></Child>
    </div>
  )
}
export default App