import React, { useState, useDeferredValue } from "react"
import { Input, List } from "antd"
import mockjs from "mockjs"
interface Item {
    id: number
    name: string
    address: string
}
const UseDeferredValue = () => {
    const [val, setVal] = useState('')
    const [list, setList] = useState<Item[]>(()=>{
        return mockjs.mock({
            'list|10000':[
                {
                    'id|+1':1,
                    name: '@natural',
                    'address':'@county(true)'
                }
            ]
        }).list
    })
    return (
        <div>
            <Input value={val} onChange={(e)=> setInputValue(e.target.value)} placeholder="请输入姓名"/>
            <List dataSource={list}
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