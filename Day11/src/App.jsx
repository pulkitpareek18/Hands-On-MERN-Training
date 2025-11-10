import { useState, useEffect } from 'react'
import './App.css'
import alarmSound from './alarm-sound.wav';

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [isAlarmSet, setIsAlarmSet] = useState(false);

  // useEffect(() => { // Runs on every render
  //   alert(`Count is: ${count}`)
  // })

  // useEffect(() => { // Runs on initial render only
  //   alert(`Count is: ${count}`)
  // },[])

  // useEffect(() => { // Runs when 'count' changes
  //   alert(`Count is: ${count}`)
  // },[count])


  // const increaseCountEverySecond = () => {

  //   // setTimeout(() => {
  //   //   setCount(prev => prev + 1)
  //   //   increaseCountEverySecond()
  //   // }, 1000);

  // }


  const setAlarm = () => {
    setIsAlarmSet(true);
  }

  useEffect(() => {
    // setCount(count + 1)

    if (isAlarmSet){
      setTimeout(() => {      
        setCount(count + 1)
      }, 1000);
    }

  }, [count, isAlarmSet])


  const audio = new Audio(alarmSound); // your file path


  return (
    <>
      <div>
      </div>
      <h1>{count}</h1>
      <h2>After 20 Seconds please wake up</h2>
      <h1>{count == 20 ? audio.play() : null}</h1>
   

      {/* <h1>{name}</h1> */}
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          Increase Count
        </button> */}

        <button onClick={setAlarm}>
          Start Alarm
        </button>

        {/* <button onClick={() => setName((name) => name + "P")}>
          Increase Name
        </button> */}
      </div>
    </>
  )
}

export default App
