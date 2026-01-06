import { useRef, useState } from "react"

const useRefInterval = () => {
    let timer= useRef<NodeJS.Timeout | null >(null)
    let [count,setCount] = useState(0)
    const handleClick = () => {
        timer.current = setInterval(()=>{
            setCount(count =>count+1)
        },100)
    }
    const handleEnd = ()=>{
        if(timer.current){
        clearTimeout(timer.current)
        timer.current =null
        }
    }
    return (
        <div>
            <button onClick={handleClick}>计时开始</button>
            <button onClick={handleEnd}>计时结束</button>
            <div>{count}</div>
        </div>
    )
}
export default useRefInterval
