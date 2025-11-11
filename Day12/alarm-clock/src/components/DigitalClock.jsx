import { useState, useEffect } from "react";
import alarmSound from "../alarm-sound.wav";

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());
    const [alarmTime, setAlarmTime] = useState(null);
    const [isAlarmSet, setIsAlarmSet] = useState(false);
    const [isAlarmRinging, setIsAlarmRinging] = useState(false);
    // console.log(time.toLocaleTimeString("it-IT"));

    const audio = new Audio(alarmSound); // your file path


    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        if (isAlarmSet && alarmTime) {
            let alarmTimeFormatted = alarmTime;
            let currentTimeFormatted = time.toLocaleTimeString("it-IT").slice(0,5);
            
            if (alarmTimeFormatted === currentTimeFormatted) {
                // alert("Alarm ringing!");
                
                setIsAlarmRinging(true); 
                audio.play();
                // setIsAlarmSet(false);
            }
        }

        return () => clearInterval(timer);
    }, [isAlarmSet, alarmTime, time]);

    const stopAlarm = () => {
        audio.pause();
        audio.currentTime = 0;
        setIsAlarmSet(false);
        setIsAlarmRinging(false);
    }


    // setInterval(()=>{
    //     setTime(new Date());
    //     // console.log(alarmTime)
    //     // console.log(time.toLocaleTimeString("it-IT").slice(0,5))
    //     let alarmTimeFormatted = alarmTime;
    //     let currentTimeFormatted = time.toLocaleTimeString("it-IT").slice(0,5);


    //     if(isAlarmSet){
    //         console.log("Alarm is set");
    //         if(alarmTimeFormatted == currentTimeFormatted){
    //             alert("Alarm ringing!");
    //             setIsAlarmSet(false);
    //         }
    //     }
    // }, 1000);

  return (
    <div className="p-8 mx-auto my-auto flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Digital Clock Component */}

        <h2 className="text-2xl font-bold mb-4">Digital Clock</h2>
        <div className="container h-48 w-96 border p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-center h-full bg-white rounded-lg">
            <span className="text-5xl font-bold">{time.toLocaleTimeString("it-IT")}</span>
          </div>
        </div>

        {/* Alarm Setting Component */}
        <div className="mt-6 w-96 p-4 border rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-4">Set Alarm</h3>
            <input 
                type="time"
                onChange={(e) => setAlarmTime(e.target.value)}
            /> 
            <button 
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setIsAlarmSet(true)}
            >
                Set Alarm
            </button>

          {isAlarmSet && alarmTime && (
            <>
            <p className="mt-4 text-green-600">Alarm set for: {alarmTime}</p>
            </>
          )}

            {isAlarmRinging && (
                <button
                    className="mt-4 px-4 mx-4 py-2 bg-red-500 text-white rounded"
                    onClick={stopAlarm}
                >
                    Stop Alarm
                </button>
            )}

        </div>

    </div>
  )
}

export default DigitalClock
