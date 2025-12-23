import UseImmer from "./components/useImmer"
import UseReducer from "./components/useReducer"
import './index.css'
function App() {

  return (
    <>
      <div>
        <div className="useReducer1">
          <h1>useReducer实践</h1>
          <UseReducer />
        </div>
         <div>
          <h1>useImmer实践</h1>
          <UseImmer />
        </div>
      </div>
    </>
  )
}

export default App
