// import UseDeferredValue from "./components/useDeferredValue"
import ImperativeHandle from "./components/practice/ImperativeHandle"
import UseContext from "./components/useContext"
import UseEffect from "./components/useEffect"
import UseImmer from "./components/useImmer"
import UseImperativeHandle from "./components/useImperativeHandle"
import UseLayoutEffect from "./components/useLayoutEffect"
import UseReducer from "./components/useReducer"
import UseRef from "./components/useRef"
import UseRefInterval from "./components/useRefInterval"
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
         <div>
          <h1>useRef实践</h1>
          <UseRef />
        </div>
         <div>
          <h1>useRefInterval实践</h1>
          <UseRefInterval />
        </div>
        <div style={{backgroundColor:'lightblue'}}>
          <h1>useImperativeHandle实践</h1>
          <UseImperativeHandle />
        </div>
        <div style={{backgroundColor:'lightcoral'}}>
          <h1>useImperativeHandle实战</h1>
          <ImperativeHandle />
        </div>
           <div>
          <h1>UseContext实践</h1>
          <UseContext />
        </div>
      </div>
    </>
  )
}

export default App
