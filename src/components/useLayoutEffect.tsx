import { useLayoutEffect } from "react"
const UseLayoutEffect=()=>{
   useLayoutEffect(()=>{
    const list = document.getElementById('list') as HTMLUListElement
    list.scrollTop = 1200
   },[])
    return (
        <ul id="list" style={{height:'500px',overflowY:'scroll'}}>
            {Array.from({length:500},(_,i)=>(
                <li key={i}>Item {i+1}</li>
            ))
            }
        </ul>
    )
}
export default UseLayoutEffect