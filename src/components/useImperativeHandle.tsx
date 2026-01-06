import { forwardRef, useImperativeHandle, useRef, useState } from "react"
interface ChildRef {
    name: string
    addCount: () => void
}
// const Child = forwardRef<ChildRef>((prop, ref) => { //react 18
const Child = ({ref}: {ref: React.Ref<ChildRef>}) => { //react 19
    const [count, setCount] = useState(0)
    useImperativeHandle(ref, () => {
        return {
            name: 'child',
            addCount: () => setCount(count + 1)
        }
    })
    return (
        <div>
            <h3>我是Child组件</h3>
            <div>count: {count}</div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    )
}

const UseImperativeHandle = () => {
    const childRef = useRef<ChildRef>(null)
    const getChildInfo = () => {
        console.log(childRef.current);
    }
    return (
        <div>
            <h3>我是父组件</h3>
            <button onClick={getChildInfo}>获取子组件信息</button>
            <hr />
            <button onClick={() => childRef.current?.addCount()}>增加子组件count</button>
            <Child ref={childRef}></Child>
        </div>
    )
}
export default UseImperativeHandle