// import UseDeferredValue from "./components/useDeferredValue"
import UseEffect from "./components/useEffect"
import UseImmer from "./components/useImmer"
import UseLayoutEffect from "./components/useLayoutEffect"
import UseReducer from "./components/useReducer"
import UseTransition from "./components/useTransition"
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
        <div>
          <h1>useTransition实践</h1>
          <UseTransition />
        </div>
         {/* <div className="">
          <h1>useDeferredValue实践</h1>
          <UseDeferredValue />
        </div> */}
        <div>
          <h1>useEffect实践</h1>
          <UseEffect />
        </div>
         <div>
          <h1>useLayoutEffect实践</h1>
          <UseLayoutEffect />
        </div>
      </div>
    </>
  )
}

export default App
