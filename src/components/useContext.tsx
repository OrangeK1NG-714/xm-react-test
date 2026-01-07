import React, { useContext, useState } from "react"
const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType)
interface ThemeContextType {
    theme: string
    changeTheme: () => void
}
const UseContext = () => {
    const [theme, setTheme] = useState('light')
    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    return (
        <div>
            <button onClick={() => changeTheme()}>切换theme值</button>
            <ThemeContext value={{ theme ,changeTheme}}>
                <Parent />
            </ThemeContext>
        </div>
    )
}
const Parent = () => {
    const themeContext = useContext(ThemeContext)

    return (
        <div>
            <h3>我是Parent</h3>
            <button onClick={themeContext.changeTheme}></button>
            <h3>{themeContext.theme}</h3>
            <Child />
        </div>

    )
}
const Child = () => {
    const themeContext = useContext(ThemeContext)

    return (
        <div>
            <h3>我是Child</h3>
            <h3>{themeContext.theme}</h3>
        </div>

    )
}
export default UseContext