import React, { useImperativeHandle, useRef, useState } from "react"
interface ChildRef {
    form: Object
    reSet: () => void
    validate: () => boolean | string
}
const Child = ({ ref }: { ref: React.Ref<ChildRef> }) => {
    const [form, setForm] = useState({
        username: '',
        password: '',
        telephone: ''
    })
    const reSet = () => {
        setForm({
            username: '',
            password: '',
            telephone: ''
        })
    }
    const validate = () => {
        if (!form.username) {
            return '用户名不能为空'
        }
        if (!form.password) {
            return '密码不能为空'
        }
        if (!form.telephone) {
            return '手机号不能为空'
        }
        return true
    }
    useImperativeHandle(ref, () => {
        return {
            form: form,
            reSet: reSet,
            validate: validate
        }
    })
    return (
        <div>
            <h3>我是表单组件</h3>
            <input value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} placeholder="请输入用户名" type="text" />
            <input value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="请输入密码" type="text" />
            <input value={form.telephone} onChange={e => setForm({ ...form, telephone: e.target.value })} placeholder="请输入手机号" type="text" />
        </div>
    )
}
const ImperativeHandle = () => {
    const childRef = useRef<ChildRef>(null)
    const showChildInfo = () => {
        console.log(childRef.current);

    }
    const validate =()=>{
        const res =childRef.current?.validate()
        console.log(res);
        
    }
    return (
        <div>
            <h5>ImperativeHandlePractice（子组件传递给父组件）</h5>
            <Child ref={childRef} />
            <button onClick={showChildInfo}>获取表单组件内容</button>
            <button onClick={validate}>手动校验子组件</button>
            <button onClick={()=>childRef.current?.reSet()}>重置</button>
        </div>
    )
}
export default ImperativeHandle