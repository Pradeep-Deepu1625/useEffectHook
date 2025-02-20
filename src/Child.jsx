import { useEffect } from "react"

export default function Child(){
    useEffect(()=>{
        alert('child2 useEffect afterCHild1 CHild2 useEffect will be called')
    })
    return(
        <div>
            {alert('Child2 after child1 rendered child 2 will be rendered')}
        </div>
    )
}