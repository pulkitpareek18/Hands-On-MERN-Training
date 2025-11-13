import { createContext } from "react";
import { useState, useEffect } from "react";


export const TimeContext = createContext(null);


export const TimeProvider = ({ children }) => {

    const [time, setTime] = useState("4 PM")

    useEffect(() => {
        setTimeout(() => {
            updateTime();
        }, 1000);
    }, [time]);

    const updateTime = () => {
        setTime(new Date().toLocaleTimeString());
    };

    return (
        <TimeContext.Provider value={[time, setTime]}>
            {children}
        </TimeContext.Provider>
    );
}


