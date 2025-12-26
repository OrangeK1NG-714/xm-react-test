import React, { useState, useTransition } from "react"
import { Input, List } from "antd"
interface Item {
    id: number
    name: string
    address: string
}
const UseTransition = () => {
    const [val, setVal] = useState('')
    const [list, setList] = useState<Item[]>([])
    const [isPending, startTransition] = useTransition()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        fetch('/api/list?keyWord=' + value).then(res => res.json()).then(res => {
            console.log(res.list)

            startTransition(() => {
                 setVal(value)
                setList(res.list)
            })
        })
    }
    return (
        <div>
            <Input value={val} onChange={handleChange} />
            {isPending && <div>加载中</div>}
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
export default UseTransition