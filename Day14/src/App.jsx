import './App.css'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import { useState } from 'react'
import { TimeProvider } from './context/TimeContext'

function App() {

// const [time, setTime] = useState("4 PM")


  return (
    <>
     {/* <TimeContext.Provider value={[time, setTime]}>

        <Component1/>
        <Component2/>
        <Component3/>

     </TimeContext.Provider> */}



     <TimeProvider>
        <Component1/>
        <Component2/>
        <Component3/>
     </TimeProvider>
    </>
  )
}

export default App