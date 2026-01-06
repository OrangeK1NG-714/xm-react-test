import { useRef, useState } from "react"

const UseRef =()=>{
    const num = useRef(0)
    const [count,setCount] = useState(0)
    const handleClick =()=>{
        setCount(count+1)
        num.current = count
    }
    return (
        <div>
            <button onClick={handleClick}>+1</button>
            <div>{count} : {num.current}</div>
        </div>
    )
}
export default UseRef