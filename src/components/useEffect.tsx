import { useEffect, useState } from "react"
const UseEffect=()=>{
    const [count,setCount] =useState(0)
    const [name,setName] = useState('')
    useEffect(()=>{
      console.log('执行了', count, name)
      return ()=>{
        console.log('卸载了');
      }
    },[count])
    return (
        <div>
            <div>
                <h3>count:{count}</h3>
                <button onClick={()=>{setCount(count+1)}}>+</button>
            </div>         
            <div>
                <h3>name:{name}</h3>
                <input value={name} onChange={(e)=>setName(e.target.value)} />    
            </div>   
        </div>
    )
}
export default UseEffect