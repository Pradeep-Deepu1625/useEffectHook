import { useEffect, useState } from "react"
import axios from 'axios'
function FetchData(){
    const [data,setData] = useState([])
    // This is will called after render of jsx code on mounting time as well after updation also
    useEffect(()=>{
        alert('childUseEffect i am goin to exicute first')
        console.log('child useEffect I am going to excitue first')
    })
    // this useEffect will be called only once on mounting time after rendering
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            console.log(res.data)
            setData(()=>[...res.data])
        }).catch((err)=> console.log(err))
    },[])
    return(
        <div>
            {alert('child I am going to render first')}
            {
                data.length > 0 ? data.map((prod)=>(
                    <li key={prod.id}>{prod.title}</li>
                )) : ''
            }
        </div>
    )
}
export default FetchData