import { useReducer } from "react"
const UseReducer = () => {
    interface Iaction{
        type:String
    }
    const initialState = {count:0}
    const [state,dispatch] = useReducer(reducer, initialState)
    function reducer (state:any,action:Iaction){
        switch (action.type){
            case 'increment' :
                return {count :state.count+1}
            case 'decrement' :
                return {count :state.count-1}
        }
    }
    return (
        <div>
            Count:{state!.count}
            <button onClick={()=>{dispatch({type: 'decrement'})}}>-1</button>
            <button onClick={()=>{dispatch({type: 'increment'})}}>+1</button>
        </div>
    )
}
export default UseReducer