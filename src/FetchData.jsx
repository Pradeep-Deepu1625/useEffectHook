import { useEffect, useState } from "react"
import axios from 'axios'
function FetchData(){
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/1').then((res)=>console.log(res)).catch((err)=> console.log(err))
    },[])
    return(
        <div>
            {

            }
        </div>
    )
}
export default FetchData