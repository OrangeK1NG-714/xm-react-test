import React, { useState, useDeferredValue } from "react"
import { Input, List } from "antd"
import mockjs from "mockjs"
interface Item {
    id: number
    name: number
    address: string
}
const UseDeferredValue = () => {
    const [val, setVal] = useState('')
    const [list, setList] = useState<Item[]>(()=>{
        return mockjs.mock({
            'list|1000':[
                {
                    'id|+1':1,
                    name: '@natural',
                    'address':'@county(true)'
                }
            ]
        }).list
    })
    const deferredQuery = useDeferredValue(val)
    const isStale = deferredQuery !==val
    const findItem =()=>{
        console.log(deferredQuery,'---',val);
        
        return list.filter(item => item.name.toString().includes(deferredQuery))
    }
    return (
        <div>
            <Input value={val} onChange={(e)=> setVal(e.target.value)} placeholder="请输入姓名"/>
            <List dataSource={findItem()} style={{opacity:isStale?'0.2':'1'}}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta title={item.name} description={item.address} />
                    </List.Item>
                )}
            >
            </List>
        </div>
    )
}
export default UseDeferredValue